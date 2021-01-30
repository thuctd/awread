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
sudo apt install cron

```
