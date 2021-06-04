# // INPUT: update this
ARG application=backend-api
ARG applicationPath=backend/api


FROM node:14-alpine as builder
ENV CYPRESS_INSTALL_BINARY=0
RUN --mount=type=bind,source=/tmp/.pnpm-store/v3,target=/root/.pnpm-store/v3
WORKDIR /batcave
RUN npm i -g pnpm
COPY decorate-angular-cli.js package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod
COPY *.js tsconfig*.json angular.json nx.json ./
COPY configs/tailwind configs/tailwind

# //INPUT: update this
FROM builder as build-backend-api
# //NOTE: NODE_ENV is coming from server environment in build process, not coming from container environment
ENV NODE_ENV=${NODE_ENV} 
ARG application
ARG applicationPath

# RUN ls
RUN echo application is: $application
RUN echo applicationPath is: $applicationPath
RUN echo NODE_ENV is: $NODE_ENV
RUN echo NODE_ENV is: ${NODE_ENV}

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