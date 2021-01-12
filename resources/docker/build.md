docker build -t backend-graphql:v2 -f configs/Dockerfile.backend-graphql .

DOCKER_BUILDKIT=1 docker build -t awread/backend-graphql . -f ./configs/dockers/backend-graphql.Dockerfile --network="host"
DOCKER_BUILDKIT=1 docker build -t awread/backend-graphql . -f ./configs/dockers/backend-graphql.Dockerfile

DOCKER_BUILDKIT=1 docker build -t awread/backend-graphql -f ./configs/dockers/backend-graphql.Dockerfile .

docker run --rm -d -p 5000:5000 --name hiepxanh awread/backend-graphql
