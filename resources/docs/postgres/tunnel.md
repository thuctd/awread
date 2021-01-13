# run psl on tunnel

https://support.cloud.engineyard.com/hc/en-us/articles/205408088-Access-Your-Database-Remotely-Through-an-SSH-Tunnel

ssh -L localhost:5433:172.17.0.2:5432 hiepxanh@awread.vn
ssh -L 5433:172.17.0.2:5432 hiepxanh@awread.vn

-L : dont know
5433: localhost port
172.17.0.2: local ip on server
5432: port on server
hiepxanh@awread.vn: usname@host

# test with psql:

psql -U deploy -d myapp -p 5433 -h 127.0.0.1
psql -U postgres -d awread_app -p 5433 -h localhost
psql -U postgres -d awread_app -p 5433 -h localhost
then enter password on server
password: 41d4955151312a9a900dc2f3681953c1

-U: username on database
-d: database name
-p: port name
-h: host name
