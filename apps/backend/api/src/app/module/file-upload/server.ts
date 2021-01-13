import * as express from 'express';
import multer from 'multer';

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const upload = require('./middleware/file-upload');

app.use(bodyParser.json());
app.use(cors());

app.post('/api/upload', upload.array('file', 1), (req, res) => {
  res.send({ file: req.file });
});

app.listen(5000, () => {
  console.log('Server listening on port 5000!');
});