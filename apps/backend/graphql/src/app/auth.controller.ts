import passport from 'passport';
import { OAuthStrategy } from 'passport-google-oauth';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import express from 'express';


const config = {
    facebook_key: '1687794138050695',
    facebook_secret: '942ff6886b12ab87de01d29262b94d3a',
    callback_url: 'https://localhost:5000/auth/facebook/callback',
    use_database: false
};

export class AuthController {
    constructor(public app: express.Express) {
        passport.use(new FacebookStrategy({
            clientID: config.facebook_key,
            clientSecret: config.facebook_secret,
            callbackURL: config.callback_url
        },
            function (accessToken, refreshToken, profile, done) {
                console.log('accessToken, refreshToken, profile, done', accessToken, refreshToken, profile, done);
            }
        ));
        this.facebookLogin();
        this.facebookLoginCallback();
    }

    facebookLogin() {
        this.app.get('/auth/facebook', passport.authenticate('facebook'));
    }

    facebookLoginCallback() {
        this.app.get('/auth/facebook/callback', passport.authenticate('facebook', {
            successRedirect: '/',
            failureRedirect: '/login'
        })
        );
    }


}