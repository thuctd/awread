dokku logs backend-graphql --tail
docker exec -it backend-api.web.1 sh
docker exec -it dokku.postgres.awread_database bash

printenv | grep foo
printenv | grep HOME

env
env | more
set
set | more

export NODE_ENV=next
echo $NODE_ENV

dokku enter backend-api web echo hi
dokku enter backend-api web printenv
