# scp -r ./copy-id-rsa.sh  root@awread.vn:/home/hiepxanh
username=hiepxanh
echo welcome $username
mkdir /home/$username/.ssh
chmod 700 /home/$username/.ssh
cp /root/.ssh/authorized_keys /home/$username/.ssh/authorized_keys
chmod 600 /home/$username/.ssh/authorized_keys
chown -R $username:$username /home/$username/.ssh

echo authorized_keys copied! Have a good day