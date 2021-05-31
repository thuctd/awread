# postgres extension:

- update apt
  sudo apt-get update

- Ubuntu/Debian:
  sudo apt install postgresql-contrib

- Redhat/Centos
  sudo dnf install postgresql10-contrib

Fedora

- sudo dnf install postgresql-contrib

# list all exntension:

- go into container
  dokku postgres:enter awread_database
- get info
  dokku postgres:info awread_database
- run psql
  psql -U postgres -W -d awread_database
- then enter password
  a1ff75bcb371eeb48ae6c6f0a958ece5
- run psql command;
  SELECT _ FROM pg_extension;
  select _ from pg_available_extensions;
  CREATE EXTENSION pgcrypto;

# list container

sudo docker container ls
docker exec -it dokku.postgres.awread_database bash

# create a postgres service with the name railsdatabase

dokku postgres:create awread_database --image postgres --image-version latest
dokku postgres:link awread_database backend-graphql
dokku postgres:restart awread_database
get database
dokku postgres:info awread_database
dokku config backend-graphql --all

# usage

dokku postgres:enter awread_database

# psql

psql -U postgres

# drop

DROP DATABASE awread_database WITH (FORCE);

# list database

\l
