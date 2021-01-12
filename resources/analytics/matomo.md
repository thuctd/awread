# Pull image and tag it

docker pull crazymax/matomo:latest
docker tag crazymax/matomo:latest dokku/matomo:v3.13.5

# Create app

dokku apps:create matomo
dokku config:set --no-restart matomo TZ=Europe/Berlin MEMORY_LIMIT=256M UPLOAD_MAX_SIZE=16M OPCACHE_MEM_SIZE=128 REAL_IP_FROM=0.0.0.0/32 REAL_IP_HEADER=X-Forwarded-For LOG_LEVEL=WARN

# Set domain

dokku domains:set matomo matomo.example.com

# Create database

dokku mariadb:create matomo-mariadb

# Create and mount persistent volume

mkdir /var/lib/dokku/data/storage/matomoo

# UID:GUID are set to 101 in the nginx image that crazymax/matomo uses

chown 101:101 /var/lib/dokku/data/storage/matomo
dokku storage:mount matomo /var/lib/dokku/data/storage/matomo:/data

# Add correct proxy ports

dokku proxy:ports-add matomo http:80:8000
dokku proxy:ports-remove matomo http:80:5000

# Deploy app for the first time

dokku tags:deploy matomo v3.13.5

# Setup Let's Encrypt

dokku config:set --no-restart matomo DOKKU_LETSENCRYPT_EMAIL=letsencrypt@example.com
dokku letsencrypt matomo
dokku letsencrypt:auto-renew matomo

# Grep MariaDB information for the setup

dokku mariadb:info mariadb-matomo
