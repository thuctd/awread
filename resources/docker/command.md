backend.web.1: name of container serving backend;
frontend.web.1: name of container serving frontend;

# container

- get inside: docker exec -it backend.web.1 /bin/sh;
- attach view logs: docker attach backend.web.1;
- list: docker container ls;
- logs: docker logs backend.web.1;

# network

- create: docker network create graphql-network;
- connect app: docker network connect graphql-network backend.web.1;
- inspect: docker network inspect graphql-network;

# network tool

- ping: docker exec -it backend.web.1 ping frontend.web.1;
- add curl: apk add curl;
- test app on port: curl localhost:5000;
- test app on other network:
  docker exec -it frontend.web.1 /bin/sh;
  curl frontend.web.1:4200;
