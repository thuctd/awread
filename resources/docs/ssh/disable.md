sudo vi /etc/ssh/sshd_config

ChallengeResponseAuthentication no
PasswordAuthentication no
UsePAM no
PermitRootLogin no

/etc/init.d/ssh reload
sudo systemctl reload ssh

# test

ssh root@server1.cyberciti.biz
