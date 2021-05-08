import passport from 'passport';
import { OAuthStrategy } from 'passport-google-oauth';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { BaseController } from './base.controller';


const config = {
    facebook_key: '1687794138050695',
    facebook_secret: '942ff6886b12ab87de01d29262b94d3a',
    callback_url: 'http://localhost:5000/auth/facebook/callback',
    use_database: false
};

export class AuthController extends BaseController {
    passport = passport;
    constructor() {
        super();
        passport.use(new FacebookStrategy({
            clientID: config.facebook_key,
            clientSecret: config.facebook_secret,
            callbackURL: config.callback_url,
            profileFields: ['id', 'displayName', 'name', 'picture', 'email'],
        },
            (accessToken, refreshToken, profile, done) => {
                console.log('accessToken, refreshToken, profile, done', accessToken, refreshToken, profile, done);
                done(null, profile);
            }
        ));

    }

    initRoutes() {
        this.initPassport();
        this.router.get('/secure', (req, res) => {
            // console.log('req', req);
            res.json({ status: 'secure route', isAuth: req.isAuthenticated(), user: req.user });
        })

        this.router.get('/test-auth', passport.authenticate('facebook'), (req, res) => {
            console.log('test-auth', req);
            res.json(JSON.stringify(req.user));
        });

        this.router.get('/auth/facebook', this.facebookLogin(),
            function (req, res) {
                // If this function gets called, authentication was successful.
                // `req.user` contains the authenticated user.
                res.redirect('/users/' + (req.user as any).username);
            });
        this.facebookLoginCallback();
    }

    initPassport() {
        // console.log('init passport', passport);
        passport.serializeUser((user, done) => {
            console.log('user, done serializeUser', user, done);
            done(null, user);
        });

        passport.deserializeUser((obj, done) => {
            console.log('obj, done deserializeUser', obj, done);
            done(null, obj);
        });
    }


    facebookLogin() {
        return passport.authenticate('facebook', {
            session: false
        });
    }

    facebookLoginCallback() {
        this.router.get('/auth/facebook/callback', passport.authenticate('facebook', {
            // failureRedirect: '/failed',
            // successRedirect: '/graphiql',
            // scope: ['email', 'public_profile'],
            session: false
        }), (req, res) => {
            res.json({
                message: 'login success',
                user: req.user,
                isAuth: req.isAuthenticated()
            });
        });
    }

    ensureAuthenticated(req, res, next) {
        console.log('req.isAuthenticated()', req.isAuthenticated());
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login')
    }

}

