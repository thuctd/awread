# create plausible app

dokku apps:create plausible

# Install plugins on Dokku

dokku plugin:install https://github.com/dokku/dokku-postgres.git postgres
dokku plugin:install https://github.com/dokku/dokku-clickhouse.git clickhouse

# Create running plugins

- pull latest image:
  docker pull postgres:latest
  docker pull clickhouse:latest

- create container
  dokku postgres:create plausible-database -I latest
  dokku clickhouse:create plausible-analytic-database -I latest

# Link plugins to the main app

dokku postgres:link plausible-database plausible
dokku clickhouse:link plausible-analytic-database plausible

postgres://postgres:d2d6a5b4ff4968198c6ef6d29e3036f9@dokku-postgres-plausible-database:5432/plausible_database
clickhouse://plausible-analytic-database:e1c128229f235017@dokku-clickhouse-plausible-analytic-database:9000/plausible_analytic_database

# change to

http://plausible-analytic-database:e1c128229f235017@dokku-clickhouse-plausible-analytic-database:8123/plausible_analytic_database

# set config clickhouse

dokku config:set plausible CLICKHOUSE_DATABASE_URL='http://plausible-analytic-database:e1c128229f235017@dokku-clickhouse-plausible-analytic-database:8123/plausible_analytic_database'

# setup config other

dokku config:set plausible SECRET_KEY_BASE=cdb0779ee2ccdd2900ea65102e65265c74fa243e881585d68760808e20bc7d2653c061573aca1c63ce57fc9b512795ea4af3feec08883a0b807b264f0fdeb3a8
dokku config:set plausible BASE_URL=https://plausible.awread.vn

dokku config:set plausible MAILER_EMAIL=info@awread.vn \
 SMTP_HOST_ADDR=pro10.emailserver.vn \
 SMTP_HOST_PORT=465 \
 SMTP_USER_NAME=info@awread.vn \
 SMTP_USER_PWD=Awread2020 \
 SMTP_HOST_SSL_ENABLED=true

dokku config:set plausible ADMIN_USER_EMAIL=hiepxanh@gmail.com \
 ADMIN_USER_NAME=hiepxanh \
 ADMIN_USER_PWD=Dream@3103

dokku config:set plausible DISABLE_REGISTRATION=true

# setup domain

dokku domains:set plausible plausible.awread.vn

# deploy:

git clone git@github.com:D1ceWard/plausible_on_dokku.git
git remote add dokku dokku@awread.vn:plausible
git push dokku master

# add ssl

dokku config:set --no-restart plausible DOKKU_LETSENCRYPT_EMAIL=hiepxanh@gmail.com
dokku letsencrypt plausible

# bug

- check process
  docker ps

- report proxy

```
$ dokku proxy:report

=====> plausible proxy information
       Proxy enabled:                 true
       Proxy port map:                http:80:8000 https:443:8000
       Proxy type:                    nginx
```

- setup new https://github.com/D1ceWard/plausible_on_dokku/issues/8
  dokku proxy:ports-set plausible http:80:80
  dokku proxy:ports-set plausible https:443:80

# add to network

dokku network:set plausible attach-post-create graphql-network
dokku network:list
dokku network:report plausible

# setup on website

<script async defer data-domain="awread.vn" src="https://plausible.awread.vn/js/plausible.js"></script>
