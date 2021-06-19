```
{
    "cron": [
        {
            "command": "docker system prune -af && docker image prune -af && docker system prune -af --volumes && docker system df",
            "schedule": "0 0 */3 * *"
        },
        {
            "command": "sudo sh -c 'truncate -s 0 /var/lib/docker/containers/_/_-json.log",
            "schedule": "@weekly"
        }
    ]
}
```

https://crontab.guru/
https://www.digitalocean.com/community/tutorials/how-to-use-cron-to-automate-tasks-ubuntu-1804

```
sudo apt update
sudo apt install cron
sudo systemctl enable cron
crontab -e
# edit system level
sudo nano /etc/crontab
```

sudo nano /var/spool/cron/crontabs/root

```

@weekly sudo sh -c 'truncate -s 0 /var/lib/docker/containers/_/_-json.log
0 3 * * * docker system prune -af && docker image prune -af && docker system prune -af --volumes && docker system df
0 12 * * * curl -X POST --data-urlencode "payload={\"channel\": \"#botreport\", \"username\": \"webhookbot\", \"text\": \"Chào sếp, awread.vn server vẫn ổn nhé\", \"icon_emoji\": \":ghost:\"}" https://hooks.slack.com/services/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



```
