# // INPUT: update this
ARG application=reader-web
ARG applicationPath=reader/web


FROM node:14-alpine as builder
ENV CYPRESS_INSTALL_BINARY=0
RUN --mount=type=cache,target=/root/.pnpm-store/v3
WORKDIR /batcave
RUN npm i -g pnpm
COPY decorate-angular-cli.js package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod
RUN pnpm ngcc --properties es2015 browser module main --create-ivy-entry-points
COPY *.js tsconfig*.json angular.json nx.json ./
COPY configs/tailwind configs/tailwind

FROM builder as build-reader-web
# //NOTE: ENVIRONMENT is coming from server environment in build process, not coming from container environment
ARG application
ARG applicationPath
ARG ENVIRONMENT=production
ENV ENVIRONMENT $ENVIRONMENT
# RUN ls
RUN echo application is: $application
RUN echo applicationPath is: $applicationPath
RUN echo ENVIRONMENT reset: $ENVIRONMENT

COPY libs ./libs
COPY apps ./apps
RUN pnpm ngcc --properties es2015 browser module main --create-ivy-entry-points
RUN pnpm build $application -- --configuration=${ENVIRONMENT} --no-progress


FROM nginx:stable-alpine as reader-web
ARG application
ARG applicationPath
EXPOSE 80
WORKDIR /app
# //INPUT: update this
COPY --from=build-reader-web /batcave/dist/apps/$applicationPath /app
COPY /configs/nginx/${ENVIRONMENT}.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]