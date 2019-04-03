FROM nginx:1.14-alpine

COPY build /usr/share/nginx/html
COPY docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

RUN  chmod -R 755 /usr/share/nginx/html

EXPOSE 3000

CMD nginx -g "daemon off;"