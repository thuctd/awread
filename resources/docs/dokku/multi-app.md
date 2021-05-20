# multi procfile

installation

# on 0.4.x+

sudo dokku plugin:install https://github.com/josegonzalez/dokku-procfile-picker.git dokku-procfile-picker
usage

# replace APP_NAME with your application's name

dokku config:set backend-graphql DOKKU_PROCFILE=backend-graphql.Procfile
