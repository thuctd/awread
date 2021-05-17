# // INPUT: update this
ARG application=backend-graphql
ARG applicationPath=backend/graphql
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

# RUN ls
# RUN echo application is: $application
# RUN echo applicationPath is: $applicationPath

# //INPUT: update this
FROM builder as build-backend-graphql
ARG application
ARG applicationPath
ARG NODE_ENV
COPY libs ./libs
COPY apps ./apps

RUN pnpm build $application -- --prod

# //INPUT: update this
FROM build-backend-graphql as backend-graphql
ARG application
ARG applicationPath
ARG NODE_ENV
# //INPUT: we expose this only for testing purpose
EXPOSE 80
# //INPUT: update this
COPY --from=build-backend-graphql /batcave/dist/apps/$applicationPath .
CMD ["node", "main.js"]