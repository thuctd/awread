/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';

const app = express();

app.get('/database', (req, res) => {
  res.send({ message: 'Welcome to database!' });
});

const port = process.env.port || 2601;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/database`);
});
server.on('error', console.error);
