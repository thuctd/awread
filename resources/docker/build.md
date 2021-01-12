docker build -t backend-graphql:v2 -f configs/Dockerfile.backend-graphql .

DOCKER_BUILDKIT=1 docker build -t awread/backend-graphql . -f ./configs/dockers/backend-graphql.Dockerfile --network="host"
DOCKER_BUILDKIT=1 docker build -t awread/backend-graphql -t v1 . -f ./configs/dockers/backend-graphql.Dockerfile
