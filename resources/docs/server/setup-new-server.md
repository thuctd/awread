check
lsb_release -a

cat ~/.ssh/id_rsa.pub

sudo apt-get install wget

https://dokku.com/docs/getting-started/installation/

google cloud IP is ephemeral, restart server causing change ip => change it to static

https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address#promote_ephemeral_ip

https://dokku.com/docs/deployment/builders/dockerfiles/

# enable build kit and ENVIRONMENT

touch /etc/environment
nano /etc/environment

DOCKER_BUILDKIT=1

ctrl + X then enter

restart server => to make it work

# update ENVIRONMENT in global

dokku config:set ENVIRONMENT=next --global
(or: dokku config:set ENVIRONMENT=production --global)

restart application

# setup docker file in global

- for the next server
  dokku docker-options:add backend-api build --build-arg ENVIRONMENT=next
  dokku docker-options:add backend-graphql build --build-arg ENVIRONMENT=next
  dokku docker-options:add reader-web build --build-arg ENVIRONMENT=next
  dokku docker-options:add writer-web build --build-arg ENVIRONMENT=next
  dokku

- for the production server
  dokku docker-options:add backend-api build --build-arg ENVIRONMENT=production
  dokku docker-options:add backend-graphql build --build-arg ENVIRONMENT=production
  dokku docker-options:add reader-web build --build-arg ENVIRONMENT=production
  dokku docker-options:add writer-web build --build-arg ENVIRONMENT=production
  dokku
