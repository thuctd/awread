check
lsb_release -a

cat ~/.ssh/id_rsa.pub

sudo apt-get install wget

https://dokku.com/docs/getting-started/installation/

google cloud IP is ephemeral, restart server causing change ip => change it to static

https://cloud.google.com/compute/docs/ip-addresses/reserve-static-external-ip-address#promote_ephemeral_ip

https://dokku.com/docs/deployment/builders/dockerfiles/

# enable build kit and NODE_ENV

export DOCKER_BUILDKIT=1

touch /etc/environment
nano /etc/environment

DOCKER_BUILDKIT=1
NODE_ENV=next

ctrl + X then enter

restart server => to make it work

# update NODE_ENV in global

dokku config:set NODE_ENV=next --global

restart application

# setup docker file

dokku docker-options:add backend-api build --build-arg NODE_ENV=next
dokku docker-options:add backend-graphql build --build-arg NODE_ENV=next
dokku docker-options:add reader-web build --build-arg NODE_ENV=next
dokku docker-options:add writer-web build --build-arg NODE_ENV=next
dokku
