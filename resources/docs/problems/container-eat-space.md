https://birkhoff.me/devops-truncate-docker-container-logs-periodically-to-free-up-server-disk-space/
solution:
https://github.com/moby/moby/issues/33775#issuecomment-651208487
https://nickjanetakis.com/blog/docker-tip-32-automatically-clean-up-after-docker-daily

prune:
sudo sh -c 'truncate -s 0 /var/lib/docker/containers/_/_-json.log
docker system prune -af && docker image prune -af && docker system prune -af --volumes && docker system df
view json:

```
sh -c "du -ch /var/lib/docker/containers/*/*-json.log"
df -h
```
