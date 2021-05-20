curl -X POST -H 'Content-type: application/json' --data '{"text":"Restarting client web"}' https://hooks.slack.com/services/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
dokku ps:restart reader-web
dokku ps:restart writer-web