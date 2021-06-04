# // INPUT: update this
ARG application=backend-graphql
ARG applicationPath=backend/graphql


FROM node:14-alpine as builder
ENV CYPRESS_INSTALL_BINARY=0
RUN --mount=type=cache,target=/root/.pnpm-store/v3
RUN --mount=type=cache,target=/usr/local/bin/pnpm
RUN --mount=type=cache,target=/usr/local/lib/node_modules
WORKDIR /batcave
RUN npm i -g pnpm
COPY decorate-angular-cli.js package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod
COPY *.js tsconfig*.json angular.json nx.json ./
COPY configs/tailwind configs/tailwind

# //INPUT: update this
FROM builder as build-backend-graphql
ARG application
ARG applicationPath
ARG NODE_ENV
COPY libs ./libs
COPY apps ./apps

RUN pnpm build $application -- --configuration=$NODE_ENV --no-progress

# //INPUT: update this
FROM build-backend-graphql as backend-graphql
ARG application
ARG applicationPath
# //INPUT: we expose this only for testing purpose
EXPOSE 80
# //INPUT: update this
COPY --from=build-backend-graphql /batcave/dist/apps/$applicationPath .
CMD ["node", "main.js"]