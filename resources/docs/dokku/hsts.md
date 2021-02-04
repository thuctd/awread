http://dokku.viewdocs.io/dokku/configuration/nginx/#hsts-header
dokku nginx:set node-js-app hsts false
dokku nginx:set node-js-app hsts-include-subdomains false
dokku nginx:set node-js-app hsts-max-age 0
