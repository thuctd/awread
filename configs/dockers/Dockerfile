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