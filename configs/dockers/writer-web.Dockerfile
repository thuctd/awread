# FROM nginx:alpine
# EXPOSE 80
# COPY configs/nginx/default.conf /etc/nginx/conf.d/default.conf
# WORKDIR /app
# COPY dist/apps/writer/web .
FROM nginx:stable-alpine as production-stage
COPY dist/apps/writer/web /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]