# remember

after new build on backend-graphql, you need to restart client app:

- dokku ps:restart reader-web

tutorial 1 easy: https://github.com/amannn/dokku-node-hello-world

tutorial 2 normal: https://www.accordbox.com/blog/how-deploy-django-project-dokku-docker/

dokku apps:create django_dokku_docker
sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git
dokku postgres:create django_dokku_docker_db --image postgres --image-version latest
dokku postgres:link django_dokku_docker_db django_dokku_docker
dokku config django_dokku_docker_db

# domain

dokku domains:add django_dokku_docker dokku-docker.accordbox.com

# network

dokku networks:create graphql-network
dokku network:set story-writer-web attach-post-create graphql-network

# SSL

$ dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git
$ dokku config:set --no-restart --global DOKKU_LETSENCRYPT_EMAIL=info@awread.vn
$ dokku config:set --no-restart story-writer-web DOKKU_LETSENCRYPT_EMAIL=info@awread.vn
// app must be availabe to register let's encypt
$ dokku letsencrypt story-writer-web
$ dokku letsencrypt:cron-job --add
// maybe no need this
$ dokku letsencrypt:auto-renew story-writer-web

# this would setup cron job to update letsencrypt certificate

$ dokku letsencrypt:cron-job --add

# postgres install

- on the Dokku host
- install the postgres plugin
- plugin installation requires root, hence the user change

sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git

- create a postgres service with the name railsdatabase

dokku postgres:create awread_database --image postgres --image-version latest
dokku postgres:link awread_database backend-graphql

get database
dokku postgres:info awread_database
dokku config backend-graphql --all

# deploy lock

dokku apps:lock APP
dokku apps:unlock APP

# log:

dokku logs backend-graphql -t

# configs:

dokku config:show reader-web
