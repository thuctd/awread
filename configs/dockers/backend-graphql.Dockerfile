FROM node:14-alpine
ENV CYPRESS_INSTALL_BINARY=0
ENV PG_HOST=host.docker.internal
ENV PG_PORT=5433
ENV PG_USER=postgres
ENV PG_PASSWORD=41d4955151312a9a900dc2f3681953c1
ENV PG_DB_NAME=awread_app
WORKDIR /batcave
COPY ["package.json", "pnpm-lock.yaml", "./"]
RUN npm i -g pnpm
RUN pnpm install --prod --silent --frozen-lockfile
COPY dist/apps/backend/graphql .
EXPOSE 5000
CMD ["node", "main.js"]