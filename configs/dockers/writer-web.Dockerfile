FROM node:14-alpine as builder
EXPOSE 5000
ENV CYPRESS_INSTALL_BINARY=0
WORKDIR /batcave
RUN npm i -g pnpm
COPY ["package.json", "pnpm-lock.yaml", "./"]
RUN pnpm install --silent --frozen-lockfile --filter=!cypress --filter=!prettier

FROM nginx:stable-alpine as writer-web
EXPOSE 80
COPY dist/apps/writer/web /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]