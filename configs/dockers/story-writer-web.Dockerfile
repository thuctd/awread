# // INPUT: update this
ARG application=writer-web
ARG applicationPath=writer/web

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
FROM builder as build-story-writer-web
ARG application
ARG applicationPath
COPY .storybook ./.storybook
COPY libs ./libs
COPY apps ./apps
RUN pnpm nx build-storybook $application -- -c ci

# RUN echo application is: $application
# RUN echo applicationPath is: $applicationPath
# //INPUT: update this
FROM nginx:stable-alpine as story-writer-web
ARG application
ARG applicationPath
EXPOSE 80
WORKDIR /app
# //INPUT: update this
COPY --from=build-story-writer-web /batcave/dist/storybook/$application /app
COPY /configs/nginx/storybook.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]