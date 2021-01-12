FROM nginx:alpine
EXPOSE 80
COPY configs/nginx/default.conf /etc/nginx/conf.d/default.conf
WORKDIR /app
COPY dist/apps/writer/web .