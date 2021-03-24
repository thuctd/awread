1. run docker
2. run pgmodeler
3. docker run --init -p 5000:5000 graphile/postgraphile --connection postgres://postgres:admin@host.docker.internal:5432
   /postgres --schema public --watch
