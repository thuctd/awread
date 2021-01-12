FROM node:14-alpine
ENV CYPRESS_INSTALL_BINARY=0
WORKDIR /batcave
COPY ["package.json", "pnpm-lock.yaml", "./"]
RUN npm i -g pnpm
RUN pnpm install --prod --silent --frozen-lockfile
COPY dist/apps/backend/graphql .
EXPOSE 5000
CMD ["node", "main.js"]