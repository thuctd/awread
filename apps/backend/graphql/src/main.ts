import express from 'express';
import { postgraphile } from 'postgraphile';
import cors from 'cors';
import bodyParser from 'body-parser';
import admin from 'firebase-admin';
import firebaseConfig from './adminsdk.json';
import { IncomingMessage } from 'http';
import { environment } from '@awread/global/environments';

const app = express();
const FIREBASE_URL = environment.firebase.databaseURL;
const SCHEMA = environment.postgres.SCHEMA;
const DATABASE_URL = process.env.DATABASE_URL || environment.postgres.DATABASE_URL;

const asyncMiddleware = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next);
};

const checkJwt = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split('Bearer ')[1];
    if (!token) {
      console.log('no token found');
      next();
    } else {
      const decodedToken = await admin.auth().verifyIdToken(token);
      req['user'] = decodedToken;
      next();
    }
  } catch (error) {
    res.status(401).send(error);
  }
};
const postgraphileOptions = {
  watchPg: true,
  graphiql: true,
  enhanceGraphiql: true,
  pgSettings: async (req: IncomingMessage & { user: any }) => {
    console.log('req.user', req.user);
    return checkRole(req);
  },
};

admin.initializeApp({
  credential: admin.credential.cert(firebaseConfig as admin.ServiceAccount),
  databaseURL: FIREBASE_URL,
});

app.use((req, res, next) => {
  console.log(req.path, req.url, req.method, req.protocol);
  next();
})

app.use(cors());
app.use((req, res, next) => {
  // NOTE: guard down
  res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('Hello world'));
app.post('/setCustomClaims', (req, res) => {
  // Get the ID token passed.
  const idToken = req.body.idToken;
  // Verify the ID token and decode its payload.
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((claims) => {
      // Verify user is eligible for additional privileges.
      // &&
      // claims.email.endsWith('@admin.example.com')
      console.log('claims', claims);
      if (
        typeof claims.email !== 'undefined' &&
        typeof claims.email_verified !== 'undefined'
      ) {
        try {
          admin
            .auth()
            .setCustomUserClaims(claims.sub, {
              role: 'mod',
            })
            .then(function () {
              // Tell client to refresh token on user.
              res.end(
                JSON.stringify({
                  status: 'success',
                })
              );
            });
        } catch (error) {
          res.send(`error: ${JSON.stringify(error)}`);
        }
        // Add custom claims for additional privileges.
      } else {
        // Return nothing.
        res.end(JSON.stringify({ status: 'ineligible' }));
      }
    });
});

app.use('/graphql', asyncMiddleware(checkJwt));

app.use(postgraphile(DATABASE_URL, SCHEMA, postgraphileOptions));

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log('database url:', DATABASE_URL);
  console.log(`Listening at http://localhost:${port}/graphiql`);
  // console.log(`process env`, process.env);
});
server.on('error', console.error);

function checkRole(req) {
  if (req.user) {
    if (req.user.role === 'mod') {
      console.log('role is admin');
      return {
        role: 'admin',
        'jwt.claims.user_id': req.user.uid,
      };
    }

    console.log('role is writer');
    return {
      role: 'writer',
      'jwt.claims.user_id': req.user.uid,
      // req.user.uid,
    };
  } else {
    console.warn('failed to authenticate, using role default (anonymous)');
    // role null will be using default role of Postgraphile
    return {
      role: 'writer',
      'jwt.claims.user_id': '10f62cca-d75d-4b7c-8869-9ee319819431',
    };
  }
}
