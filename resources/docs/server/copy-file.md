# copy file

server to server
scp -3 awread.vn:/tmp/dokku-backups/2021-06-02-10-06.tar.gz awread-next:/tmp/dokku-backups/2021-06-02-10-06.tar.gz

server to local
scp -r awread.vn:/tmp/dokku-backups/2021-06-02-10-06.tar.gz ~/.ssh/backups

scp -r ~/.ssh/backups awread-next:/tmp/dokku-backups
