https://dokku.com/docs/getting-started/installation/

https://dokku.com/docs/advanced-usage/backup-recovery/

# backup postgres

dokku postgres:export awread_database > /tmp/awread_database.dump
dokku postgres:import awread_database < /tmp/awread_database.dump

# set config

dokku config:set --global NODE_ENV=next

# set git

git remote add next-backend-graphql dokku@awread-next:backend-graphql
git remote add next-backend-api dokku@awread-next:backend-api
git remote add next-reader-web dokku@awread-next:reader-web
git remote add next-writer-web dokku@awread-next:writer-web

# copy file (DONOT RUNING IN POWERSHELL OR CMD, ONLY IN BASH)

rm /tmp/awread_database.dump;
server to server
scp -3 awread.vn:/tmp/dokku-backups/2021-06-02-10-06.tar.gz awread-next:/tmp/dokku-backups/2021-06-02-10-06.tar.gz

not working verison (because bash + powershell not working with scp)
scp -3 awread.vn:/tmp/awread_database.dump awread-next:/tmp/awread_database.dump
working version??
scp -3 awread.vn:/tmp/awread_database.dump awread-next:/tmp/awread_database.dump

server to local
scp -r awread.vn:/tmp/dokku-backups/2021-06-02-10-06.tar.gz ~/.ssh/backups

local to server
scp -r ~/.ssh/backups awread-next:/tmp/dokku-backups

# create network

dokku network:list
dokku network:create graphql-network
okku network:set writer-web attach-post-create graphql-network
dokku network:rebuild writer-web
dokku network:rebuildall

# postgres

- export first
  dokku postgres:export awread_database > /tmp/awread-database.dump

- pull image to kick start
  docker pull postgres:latest
  dokku postgres:upgrade awread_database --image postgres --image-version latest

- copy file to target by bash
  scp -3 awread.vn:/tmp/awread_database.dump awread-next:/tmp/awread_database.dump

- import then
  dokku postgres:import awread_database < /tmp/awread-database.dump

# setup domain

https://stackoverflow.com/a/55486859/5992468

- Enable app subdomain routing
  A \*.apps.example.com <public IP address>

# Optional subdomain for Dokku instance

- apps.example.com <public IP address>

# domain

dokku domains:report

dokku domains:set-global next.awread.vn

dokku domains:set reader-web next.awread.vn

dokku domains:set writer-web w.next.awread.vn

dokku domains:set backend-graphql backend-graphql.next.awread.vn

# encrypt

https://stackoverflow.com/a/55486859/5992468

- First for acme website
  dokku letsencrypt reader-web
- Finally for buba website
  dokku letsencrypt writer-web
- Finally for buba website
  dokku letsencrypt backend-graphql
  dokku letsencrypt backend-api
