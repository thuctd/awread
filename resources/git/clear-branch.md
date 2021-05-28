git branch -d $(git branch --merged | cut -c 3- | grep -v master)
