docker build -t backend-graphql:v2 -f configs/Dockerfile.backend-graphql .

DOCKER_BUILDKIT=1 docker build -t awread/backend-graphql . -f ./configs/dockers/backend-graphql.Dockerfile --network="host"
DOCKER_BUILDKIT=1 docker build -t awread/backend-graphql . -f ./configs/dockers/backend-graphql.Dockerfile

DOCKER_BUILDKIT=1 docker build -t awread/builder -f ./configs/dockers/Dockerfile .

DOCKER_BUILDKIT=1 docker build -t awread/backend-graphql -f ./configs/dockers/backend-graphql.Dockerfile .
docker run --rm -d -p 5000:5000 --name backend-graphql.web.1 awread/backend-graphql

DOCKER_BUILDKIT=1 docker build -t awread/writer-web -f ./configs/dockers/writer-web.Dockerfile .
docker run --rm -d -p 4500:80 --name writer-web.web.1 awread/writer-web

DOCKER_BUILDKIT=1 docker build -t awread/reader-web -f ./configs/dockers/reader-web.Dockerfile .
docker run --rm -d -p 4500:80 --name reader-web.web.1 awread/reader-web
