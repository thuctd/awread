dokku network:report
dokku network:set backend-api attach-post-create graphql-network

docker exec -it backend-graphql.web.1 ping reader-web.web.1;
docker exec -it reader-web.web.1 ping plausible.web.1;
