/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var express = require('express');
var app = express();
app.get('/api', function (req, res) {
    res.send({ message: 'Welcome to graphql!' });
});
var postgraphile = require('postgraphile').postgraphile;
var cors = require('cors');
var bodyParser = require('body-parser');
var admin = require('firebase-admin');
app.use(cors());
// Enable the use of request body parsing middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
var firebaseConfig = require('./adminsdk.json');
admin.initializeApp({
    credential: admin.credential.cert(firebaseConfig),
    databaseURL: 'https://awready-beta.firebaseio.com'
});
var asyncMiddleware = function (fn) { return function (req, res, next) {
    Promise.resolve(fn(req, res, next))["catch"](next);
}; };
var checkJwt = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
    var token, decodedToken, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 4, , 5]);
                token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split('Bearer ')[1];
                if (!!token) return [3 /*break*/, 1];
                console.log('no token found');
                next();
                return [3 /*break*/, 3];
            case 1: return [4 /*yield*/, admin.auth().verifyIdToken(token)];
            case 2:
                decodedToken = _b.sent();
                req['user'] = decodedToken;
                next();
                _b.label = 3;
            case 3: return [3 /*break*/, 5];
            case 4:
                error_1 = _b.sent();
                res.status(401).send(error_1);
                return [3 /*break*/, 5];
            case 5: return [2 /*return*/];
        }
    });
}); };
app.use('/graphql', asyncMiddleware(checkJwt));
app.use(postgraphile('postgres://postgres:admin@localhost:5432/awread_app', 'public', {
    watchPg: true,
    graphiql: true,
    enhanceGraphiql: true,
    // jwtPgTypeIdentifier: 'public.jwt_token',
    // jwtSecret: 'cc',
    // pgDefaultRole: 'anonymous',
    pgSettings: function (req) { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            console.log('req.user', req.user);
            return [2 /*return*/, checkRole(req)];
        });
    }); }
}));
function checkRole(req) {
    if (req.user) {
        if (req.user.role === 'mod') {
            console.log('role is admin');
            return {
                role: 'admin',
                'jwt.claims.user_id': req.user.uid
            };
        }
        console.log('role is writer');
        return {
            role: 'writer',
            'jwt.claims.user_id': req.user.uid
        };
    }
    else {
        console.warn('failed to authenticate, using role default (anonymous)');
        // role null will be using default role of Postgraphile
        return {
            role: 'anonymous',
            'jwt.claims.user_id': 'null'
        };
    }
}
app.post('/setCustomClaims', function (req, res) {
    // Get the ID token passed.
    var idToken = req.body.idToken;
    // Verify the ID token and decode its payload.
    admin
        .auth()
        .verifyIdToken(idToken)
        .then(function (claims) {
        // Verify user is eligible for additional privileges.
        // &&
        // claims.email.endsWith('@admin.example.com')
        console.log('claims', claims);
        if (typeof claims.email !== 'undefined' &&
            typeof claims.email_verified !== 'undefined') {
            try {
                admin
                    .auth()
                    .setCustomUserClaims(claims.sub, {
                    role: 'mod'
                })
                    .then(function () {
                    // Tell client to refresh token on user.
                    res.end(JSON.stringify({
                        status: 'success'
                    }));
                });
            }
            catch (error) {
                res.send("error: " + JSON.stringify(error));
            }
            // Add custom claims for additional privileges.
        }
        else {
            // Return nothing.
            res.end(JSON.stringify({ status: 'ineligible' }));
        }
    });
});
var port = process.env.port || 5000;
var server = app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/graphiql");
});
server.on('error', console.error);
