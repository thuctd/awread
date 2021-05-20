curl -X POST -H 'Content-type: application/json' --data '{"text":"Restarting client web"}' https://hooks.slack.com/services/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
sudo dokku ps:restart reader-web
sudo dokku ps:restart writer-web