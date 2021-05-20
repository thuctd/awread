# multi procfile

installation

# on 0.4.x+

sudo dokku plugin:install https://github.com/josegonzalez/dokku-procfile-picker.git dokku-procfile-picker
usage

# replace APP_NAME with your application's name

dokku config:set backend-graphql DOKKU_PROCFILE=backend-graphql.Procfile

dokku config:show backend-graphql

# dokku

dokku enter backend-graphql
dokku enter backend-graphql web.1 /bin/sh
dokku enter backend-graphql web.1 your-custom-command
