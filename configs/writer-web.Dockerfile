EXPOSE 80
FROM nginx:alpine
COPY configs/nginx/default.conf /etc/nginx/conf.d/default.conf
WORKDIR /app
COPY dist/apps/writer/web .