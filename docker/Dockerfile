FROM mhart/alpine-node:10.15.1

# CLEAR APK CACHE FILES
RUN rm -rf /var/cache/apk/*

# INSTALL PACKAGES
RUN apk update && \
  apk add python3 && \
  apk add python3-dev && \
  apk add py3-pip && \
  apk add tzdata && \
  apk add jq && \
  apk add curl && \
  apk add nginx && \
  apk add ca-certificates && \
  update-ca-certificates && \
  ln -s /usr/bin/pip3 /usr/bin/pip && \
  ln -s /usr/bin/python3 /usr/bin/python

# CONFIGURE TIMEZONE
RUN cp /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime
RUN echo "America/Sao_Paulo" > /etc/timezone

# INSTALL AWS DEPS
RUN pip install awscli

# COPY NGINX CONFIGS
RUN rm -rf /etc/nginx
COPY ./docker/nginx /etc/nginx
RUN mkdir -p /run/nginx

# PREPARE APP DIRS
RUN  mkdir /var/www/hml
RUN  mkdir /var/www/prd

# COPY APP SRC
COPY . /build

# INSTALL NODEJS MODULES
RUN cd /build && npm install

# BUILD APP PRD
RUN cd /build && \
  npm run build && \
  mv /build/build /var/www/prd/

# BUILD APP HML
RUN cd /build && \
  npm run build:homolog && \
  mv /build/build /var/www/hml/

# CLEAR BUILD MODULES
RUN cd /var/www && rm -rf /build

# ALLOW EVERYONE TO READ /var/www
RUN  chmod -R 755 /var/www

# CLEAR APK CACHE FILES
RUN rm -rf /var/cache/apk/*

# SHOW NGINX VERSION
RUN nginx -V

# RUN NGINX
ENTRYPOINT ["/usr/sbin/nginx", "-g", "daemon off;"]

