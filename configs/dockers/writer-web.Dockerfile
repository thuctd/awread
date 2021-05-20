# // INPUT: update this
ARG application=writer-web
ARG applicationPath=writer/web
ARG GRAPHQL_URI=backend-graphql.web.1
ARG NODE_ENV=production

FROM node:14-alpine as builder
ENV CYPRESS_INSTALL_BINARY=0
WORKDIR /batcave
RUN npm i -g pnpm
COPY decorate-angular-cli.js package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
RUN pnpm run postinstall
COPY *.js tsconfig*.json angular.json nx.json ./
COPY configs/tailwind configs/tailwind
COPY configs/procfiles ./
# RUN LS
# //INPUT: update this
FROM builder as build-writer-web
ARG application
ARG applicationPath
ARG NODE_ENV
ARG GRAPHQL_URI
COPY libs ./libs
COPY apps ./apps
RUN pnpm build $application -- --prod --no-progress

# RUN echo application is: $application
# RUN echo applicationPath is: $applicationPath
# //INPUT: update this
FROM nginx:stable-alpine as writer-web
ARG application
ARG applicationPath
ARG NODE_ENV
EXPOSE 80
WORKDIR /app
# //INPUT: update this
COPY --from=build-writer-web /batcave/dist/apps/$applicationPath /app
COPY /configs/nginx/spa.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]