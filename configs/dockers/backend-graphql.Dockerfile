# // INPUT: update this
ARG application=backend-graphql
ARG applicationPath=backend/graphql


FROM node:14-alpine as builder
ENV CYPRESS_INSTALL_BINARY=0
RUN --mount=type=cache,target=/root/.pnpm-store/v3
WORKDIR /batcave
RUN npm i -g pnpm
COPY decorate-angular-cli.js package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod
COPY *.js tsconfig*.json angular.json nx.json ./
COPY configs/tailwind configs/tailwind


FROM builder as build-backend-graphql
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


FROM build-backend-graphql as backend-graphql
ARG application
ARG applicationPath
# //INPUT: we expose this only for testing purpose
EXPOSE 80
# //INPUT: update this
COPY --from=build-backend-graphql /batcave/dist/apps/$applicationPath .
CMD ["node", "main.js"]