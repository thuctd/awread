https://dokku.com/docs/getting-started/installation/

https://dokku.com/docs/advanced-usage/backup-recovery/

# set config

dokku config:set --global NODE_ENV=next

# set git

git remote add next-backend-graphql dokku@awread-next:backend-graphql

# copy file

server to server
scp -3 awread.vn:/tmp/dokku-backups/2021-06-02-10-06.tar.gz awread-next:/tmp/dokku-backups/2021-06-02-10-06.tar.gz

server to local
scp -r awread.vn:/tmp/dokku-backups/2021-06-02-10-06.tar.gz ~/.ssh/backups

scp -r ~/.ssh/backups awread-next:/tmp/dokku-backups
