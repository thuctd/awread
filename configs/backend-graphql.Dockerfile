# Build the app
FROM node:15-alpine as base
RUN npm i -g pnpm
WORKDIR /app
COPY package*.json .
RUN pnpm install --production

FROM node:15-alpine as backend-graphql
COPY /dist/apps/backend/graphql .
CMD node main.js