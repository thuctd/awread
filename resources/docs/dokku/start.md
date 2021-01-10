tutorial 1 easy: https://github.com/amannn/dokku-node-hello-world

tutorial 2 normal: https://www.accordbox.com/blog/how-deploy-django-project-dokku-docker/

dokku apps:create django_dokku_docker
sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git
dokku postgres:create django_dokku_docker_db --image postgres --image-version latest
dokku postgres:link django_dokku_docker_db django_dokku_docker
dokku config django_dokku_docker_db

# domain

dokku domains:add django_dokku_docker dokku-docker.accordbox.com

# SSL

$ dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git
$ dokku config:set --no-restart --global DOKKU_LETSENCRYPT_EMAIL=michaelyin@accordbox.com
$ dokku letsencrypt django_dokku_docker

# this would setup cron job to update letsencrypt certificate

$ dokku letsencrypt:cron-job --add

# SSH Problem

WARNING: ssh-add causing error if ssh, should delete all key to use with
ssh-add -D
bash:
$ eval `ssh-agent -s`
$ ssh-add -k ~/.ssh/id_rsa
$ cat ~/.ssh/id_rsa.pub | ssh root@103.109.43.242 dokku ssh-keys:add hiepxanh
ssh-copy-id -i ~/.ssh/mykey user@host

windows:
ssh-add -k C:\Users\hiepx\.ssh\id_rsa
Get-Command ssh

# SSH config

add this to ~/.ssh/config

```
Host dokku_server
    ForwardAgent yes
    Hostname 165.22.153.24
    Port 22
    ServerAliveInterval 60
    ServerAliveCountMax 60
```

# postgres install

- on the Dokku host
- install the postgres plugin
- plugin installation requires root, hence the user change

sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git

- create a postgres service with the name railsdatabase

dokku postgres:create railsdatabase --image postgres --image-version latest

get database
dokku postgres:info your-database-db

# deploy lock

dokku apps:lock APP
dokku apps:unlock APP
