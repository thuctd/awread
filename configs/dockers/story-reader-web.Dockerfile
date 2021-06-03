# // INPUT: update this
ARG application=reader-web
ARG applicationPath=reader/web
ARG NODE_ENV

FROM node:14-alpine as builder
ENV CYPRESS_INSTALL_BINARY=0
WORKDIR /batcave
RUN npm i -g pnpm
COPY decorate-angular-cli.js package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod
COPY *.js tsconfig*.json angular.json nx.json ./
COPY configs/tailwind configs/tailwind
# RUN LS
# //INPUT: update this
FROM builder as build-story-reader-web
ARG application
ARG applicationPath
COPY .storybook ./.storybook
COPY libs ./libs
COPY apps ./apps
RUN pnpm nx build-storybook $application -- -c ci

# RUN echo application is: $application
# RUN echo applicationPath is: $applicationPath
# //INPUT: update this
FROM nginx:stable-alpine as story-reader-web
ARG application
ARG applicationPath
EXPOSE 80
WORKDIR /app
# //INPUT: update this
COPY --from=build-story-reader-web /batcave/dist/storybook/$application /app
COPY /configs/nginx/storybook.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]