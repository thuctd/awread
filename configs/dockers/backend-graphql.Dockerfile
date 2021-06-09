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
RUN pnpm ngcc --properties es2015 browser module main --create-ivy-en
try-points
COPY *.js tsconfig*.json angular.json nx.json ./
COPY configs/tailwind configs/tailwind


FROM builder as build-backend-graphql
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

RUN pnpm build $application -- --configuration=${ENVIRONMENT} --no-progress


FROM build-backend-graphql as backend-graphql
ARG application
ARG applicationPath
# //INPUT: we expose this only for testing purpose
EXPOSE 80
# //INPUT: update this
COPY --from=build-backend-graphql /batcave/dist/apps/$applicationPath .
CMD ["node", "main.js"]