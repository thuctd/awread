# // NOTE: update this
ARG application=backend-graphql
ARG applicationPath=backend/graphql

FROM node:14-alpine as builder
ENV CYPRESS_INSTALL_BINARY=0
WORKDIR /batcave
RUN npm i -g pnpm
COPY decorate-angular-cli.js package.json pnpm-lock.yaml ./
RUN pnpm install --silent --frozen-lockfile
RUN pnpm run postinstall
COPY tsconfig*.json angular.json nx.json ./
COPY configs/tailwind configs/tailwind

# RUN ls
# RUN echo application is: $application
# RUN echo applicationPath is: $applicationPath

# //NOTE: update this
FROM builder as build-backend-graphql
ARG application
ARG applicationPath
COPY libs/global ./libs/global
COPY libs/$applicationPath ./libs/$applicationPath
COPY apps/$applicationPath ./apps/$applicationPath

RUN pnpm build $application -- --prod

# //NOTE: update this
FROM build-backend-graphql as backend-graphql
ARG application
ARG applicationPath
EXPOSE 5000
# //NOTE: update this
COPY --from=build-backend-graphql /batcave/dist/apps/$applicationPath .
CMD ["node", "main.js"]