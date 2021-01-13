FROM node:14-alpine as builder
EXPOSE 5000
ENV CYPRESS_INSTALL_BINARY=0
WORKDIR /batcave
RUN npm i -g pnpm
COPY ["package.json", "pnpm-lock.yaml", "./"]
RUN pnpm install --silent --frozen-lockfile --filter=!cypress --filter=!prettier

FROM builder as build-backend-graphql
COPY tsconfig*.json angular.json nx.json ./
COPY libs/global ./libs/global
COPY libs/backend ./libs/backend
COPY apps/backend/graphql ./apps/backend/graphql
RUN pnpm build backend-graphql -- --prod

FROM build-backend-graphql as backend-graphql
COPY --from=build-backend-graphql /batcave/dist/apps/backend/graphql .
CMD ["node", "main.js"]