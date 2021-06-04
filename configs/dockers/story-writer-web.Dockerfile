# // INPUT: update this
ARG application=writer-web
ARG applicationPath=writer/web


FROM node:14-alpine as builder
ENV CYPRESS_INSTALL_BINARY=0
RUN --mount=type=cache,target=/root/.pnpm-store/v3
WORKDIR /batcave
RUN npm i -g pnpm
COPY decorate-angular-cli.js package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod
COPY *.js tsconfig*.json angular.json nx.json ./
COPY configs/tailwind configs/tailwind

FROM builder as build-story-writer-web
# //NOTE: NODE_ENV is coming from server environment in build process, not coming from container environment
ARG application
ARG applicationPath
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV
# RUN ls
RUN echo application is: $application
RUN echo applicationPath is: $applicationPath
RUN echo NODE_ENV reset: $NODE_ENV

COPY libs ./libs
COPY apps ./apps

RUN pnpm build $application -- --configuration=${NODE_ENV} --no-progress


FROM nginx:stable-alpine as story-writer-web
ARG application
ARG applicationPath
EXPOSE 80
WORKDIR /app
# //INPUT: update this
COPY --from=build-story-writer-web /batcave/dist/storybook/$application /app
COPY /configs/nginx/storybook.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]