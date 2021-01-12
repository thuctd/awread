# FROM nginx:alpine
# EXPOSE 80
FROM nginx:stable-alpine as production-stage
COPY dist/apps/writer/web /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]