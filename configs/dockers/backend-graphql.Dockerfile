FROM node:14-alpine as builder
ENV CYPRESS_INSTALL_BINARY=0
WORKDIR /batcave
RUN npm i -g pnpm
COPY decorate-angular-cli.js package.json pnpm-lock.yaml ./
RUN pnpm install --silent --frozen-lockfile
RUN pnpm run postinstall
COPY tsconfig*.json angular.json nx.json ./
COPY configs/tailwind configs/tailwind

ARG application=backend-graphql
ARG applicationPath=backend/graphql

FROM builder as build-backend-graphql

COPY libs/global ./libs/global
COPY libs/$applicationPath ./libs/$applicationPath
COPY apps/$applicationPath ./apps/$applicationPath
RUN pnpm build $application -- --prod

FROM build-backend-graphql as backend-graphql
EXPOSE 5000
COPY --from=build-backend-graphql /batcave/dist/apps/$applicationPath .
CMD ["node", "main.js"]