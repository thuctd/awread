# // INPUT: update this
ARG application=backend-api
ARG applicationPath=backend/api
ENV NODE_ENV

FROM node:14-alpine as builder
ENV CYPRESS_INSTALL_BINARY=0
WORKDIR /batcave
RUN npm i -g pnpm
COPY decorate-angular-cli.js package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod
COPY *.js tsconfig*.json angular.json nx.json ./
COPY configs/tailwind configs/tailwind

# RUN ls
RUN echo application is: $application
RUN echo applicationPath is: $applicationPath
RUN echo NODE_ENV is: $NODE_ENV
RUN echo NODE_ENV is: ${NODE_ENV}

# //INPUT: update this
FROM builder as build-backend-api
ARG application
ARG applicationPath
ARG NODE_ENV
COPY libs ./libs
COPY apps ./apps

RUN pnpm build $application -- --configuration=${NODE_ENV} --no-progress

# //INPUT: update this
FROM build-backend-api as backend-api
ARG application
ARG applicationPath
# //INPUT: we expose this only for testing purpose
EXPOSE 80
# //INPUT: update this
COPY --from=build-backend-api /batcave/dist/apps/$applicationPath .
CMD ["node", "main.js"]