https://dokku.com/docs/getting-started/installation/

https://dokku.com/docs/advanced-usage/backup-recovery/

# set config

dokku config:set --global NODE_ENV=staging

# set git

git remote add staging-backend-graphql dokku@awread-staging:backend-graphql

# copy file

server to server
scp -3 awread.vn:/tmp/dokku-backups/2021-06-02-10-06.tar.gz awread-staging:/tmp/dokku-backups/2021-06-02-10-06.tar.gz

server to local
scp -r awread.vn:/tmp/dokku-backups/2021-06-02-10-06.tar.gz ~/.ssh/backups

scp -r ~/.ssh/backups awread-staging:/tmp/dokku-backups
