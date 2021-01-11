https://dev.to/vkolesov/how-to-protect-your-server-from-hackers-4j6l

# How to find the vulnerability

cat /var/log/auth.log | grep Accepted

# Update everything

```
#!/bin/bash
set -e
sudo apt-get update
sudo apt-get upgrade
sudo apt-get dist-upgrade
```

`sudo chmod +x /usr/local/bin/update.sh`

or this
`alias update='sudo apt-get update && sudo apt-get upgrade && sudo apt-get dist-upgrade'`
`sudo apt-get update && sudo apt-get upgrade && sudo apt-get dist-upgrade`

# generate SSH

```
// It creates the pairs of keys in the ~/.ssh directory. After that running
ssh-keygen -t rsa -b 4096
// will upload your "just created" public key to the server. Next step, log in to the server and edit the config file for sshd:
ssh-copy-id you_user@your_server_id
```

# Turn off password login

```
nano /etc/ssh/sshd_config
```

find and set this to: `PasswordAuthentication no`

# Install firewall and banner

```
apt install ufw fail2ban
ufw allow ssh
ufw allow 80
ufw allow 443
ufw enable
```

```
# make a copy of default config (this copy will overload default params according to manual)
cp  /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
nano /etc/fail2ban/jail.local
```

edit this to ufw `banaction = ufw`

# Check the result

```
fail2ban-client reload
fail2ban-client status sshd
ufw status
```
