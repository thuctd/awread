# SSH Problem

WARNING: ssh-add causing error if ssh, should delete all key to use with
ssh-add -D
bash:
$ eval `ssh-agent -s`
$ ssh-add -k ~/.ssh/id_rsa
$ cat ~/.ssh/id_rsa.pub | ssh root@103.109.43.242 dokku ssh-keys:add hiepxanh

ssh-copy-id -i ~/.ssh/mykey user@host
ssh-copy-id -f -i id_rsa.pub root@awread.vn

windows:
ssh-add -k C:\Users\hiepx\.ssh\id_rsa
Get-Command ssh
