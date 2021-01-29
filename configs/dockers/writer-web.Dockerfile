# // NOTE: update this
ARG application=writer-web
ARG applicationPath=writer/web
ARG GRAPHQL_URI=backend-graphql.web.1

FROM node:14-alpine as builder
ENV CYPRESS_INSTALL_BINARY=0
WORKDIR /batcave
RUN npm i -g pnpm
COPY decorate-angular-cli.js package.json pnpm-lock.yaml ./
RUN pnpm install --silent --frozen-lockfile
RUN pnpm run postinstall
COPY tsconfig*.json angular.json nx.json ./
COPY configs/tailwind configs/tailwind
# RUN LS
# //NOTE: update this
FROM builder as build-writer-web
ARG application
ARG applicationPath
ARG GRAPHQL_URI
COPY libs/global ./libs/global
COPY libs/$applicationPath ./libs/$applicationPath
COPY apps/$applicationPath ./apps/$applicationPath
RUN pnpm build $application -- --prod --no-progress

# RUN echo application is: $application
# RUN echo applicationPath is: $applicationPath
# //NOTE: update this
FROM nginx:stable-alpine as writer-web
ARG application
ARG applicationPath
EXPOSE 80
WORKDIR /app
# //NOTE: update this
COPY --from=build-writer-web /batcave/dist/apps/$applicationPath /app
COPY /configs/nginx/spa.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]