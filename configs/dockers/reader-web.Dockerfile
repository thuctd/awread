# // INPUT: update this
ARG application=reader-web
ARG applicationPath=reader/web
ARG GRAPHQL_URI=backend-graphql.web.1
ARG API_URI=backend-api.web.1
ARG NODE_ENV

FROM node:14-alpine as builder
ENV CYPRESS_INSTALL_BINARY=0
WORKDIR /batcave
RUN npm i -g pnpm
COPY decorate-angular-cli.js package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY *.js tsconfig*.json angular.json nx.json ./
COPY configs/tailwind configs/tailwind
# RUN LS
# //INPUT: update this
FROM builder as build-reader-web
ARG application
ARG applicationPath
ARG GRAPHQL_URI
ARG NODE_ENV
COPY libs ./libs
COPY apps ./apps
RUN pnpm build $application -- --configuration=$NODE_ENV --no-progress

# RUN echo application is: $application
# RUN echo applicationPath is: $applicationPath
# //INPUT: update this
FROM nginx:stable-alpine as reader-web
ARG application
ARG applicationPath
ARG GRAPHQL_URI
ARG NODE_ENV
EXPOSE 80
WORKDIR /app
# //INPUT: update this
COPY --from=build-reader-web /batcave/dist/apps/$applicationPath /app
COPY /configs/nginx/spa.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]