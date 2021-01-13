// https://codinglatte.com/posts/angular/using-os-environment-variables-in-angular-with-docker/

declare const $ENV: Env;

interface Env {
    ENVIRONMENT: string;
    GRAPHQL_URI: string;
}