curl -X POST --data-urlencode "payload={\"channel\": \"#botnet\", \"username\": \"webhookbot\", \"text\": \"This is posted to #botnet and comes from a bot named webhookbot.\", \"icon_emoji\": \":ghost:\"}" https://hooks.slack.com/services/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

curl -X POST -H 'Content-type: application/json' --data '{"text":"Hello, World!"}' https://hooks.slack.com/services/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

post noti to botnnet
curl -X POST -H 'Content-type: application/json' --data '{"text":"Restarting client web"}' https://hooks.slack.com/services/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

curl -X GET -H 'Authorization: Bearer xoxb-1435029467585-1620493761765-IzGYjKdyHQKfd7U7AdQ8vQm2' https://slack.com/api/conversations.list

curl -X POST -H 'Authorization: Bearer xoxb-1435029467585-1620493761765-IzGYjKdyHQKfd7U7AdQ8vQm2' -H 'Content-type: application/json' --data '{"channel": "#general","text":"Hello, World!"}' https://slack.com/api/chat.postMessage
