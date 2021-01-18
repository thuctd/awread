// aws.config.update({
//     accessKeyId: `31QTFQO80GZFYNGU0O4T`,
//     secretAccessKey: `bJoHQi1Go9Et70tWcdiOamdJrCXIUBK423X1dcJc`,
//     region: 'hn',
//     endpoint: 'https://ss-hn-1.bizflycloud.vn',
//     apiVersions: {
//         s3: '2006-03-01'
//     },
//     logger: process.stdout
// });
// const s3 = new aws.S3();

// const upload = multer({
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype === 'application/octet-stream' || file.mimetype === 'video/mp4'
//             || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//             cb(null, true);
//         } else {
//             cb(new Error('Invalid file type'), false);
//         }
//     },
//     storage: multerS3({
//         acl: 'public-read',
//         s3,
//         bucket: 'awread-bucket',
//         key: function (req, file, cb) {
//             req.file = Date.now() + file.originalname;
//             cb(null, Date.now() + file.originalname);
//         }
//     })
// });

// module.exports = upload;

// Import required AWS SDK clients and commands for Node.js
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const path = require('path');
const fs = require('fs');

// Set the AWS region
const REGION = 'REGION'; //e.g. "us-east-1"

// Set the parameters
const uploadParams = { Bucket: 'BUCKET_NAME', Key: 'KEY', Body: 'BODY' }; //BUCKET_NAME, KEY (the name of the selected file),
// BODY (the contents of the uploaded file - leave blank/remove to retain contents of original file.)
const file = 'FILE_NAME'; //FILE_NAME (the name of the file to upload (if you don't specify KEY))

// Create S3 service object
const s3 = new S3Client({ region: REGION });

// call S3 to retrieve upload file to specified bucket
const run = async () => {
    // Configure the file stream and obtain the upload parameters
    const fileStream = fs.createReadStream(file);
    fileStream.on('error', function (err) {
        console.log('File Error', err);
    });
    uploadParams.Key = path.basename(file);
    // call S3 to retrieve upload file to specified bucket
    try {
        const data = await s3.send(new PutObjectCommand(uploadParams));
        console.log('Success', data);
    } catch (err) {
        console.log('Error', err);
    }
};
run();