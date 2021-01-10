https://www.cyberciti.biz/faq/how-to-disable-ssh-password-login-on-linux/
https://www.cyberciti.biz/tips/linux-unix-bsd-openssh-server-best-practices.html
https://dev.to/vkolesov/how-to-protect-your-server-from-hackers-4j6l

cat /var/log/auth.log | grep Accepted

ssh-keygen
ssh-copy-id you_user@your_server_id
nano /etc/ssh/sshd_config
PasswordAuthentication no

apt install ufw fail2ban

ufw allow ssh
ufw allow 80
ufw allow 443

ufw enable

# make a copy of default config (this copy will overload default params according to manual)

cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
nano /etc/fail2ban/jail.local

fail2ban-client reload
fail2ban-client status sshd
