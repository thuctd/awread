// import { Injectable } from '@nestjs/common';
// import { S3, S3Client, ListBucketsCommand } from '@aws-sdk/client-s3';
// import * as AWS from 'aws-sdk';
// @Injectable()
// export class UploadCoverService {
//     client: AWS.S3;
//     newClient: S3Client;
//     constructor() {
//         console.log('process.env', process.env.AWS_SECRET_ACCESS_KEY);
//         this.setting();
//         this.listBucket();
//     }

//     async listBucket() {
//         this.client.listBuckets((err, data) => {
//             console.log('data', data);
//             console.log('err', err);
//         });

//         try {
//             const bucketParams = {
//                 Bucket: 'awread-bucket',
//                 Delimiter: '/',
//                 Prefix: 'hiepxanh/',
//             }
//             const data = await this.newClient.send(new ListBucketsCommand({}));
//             console.log('Success', data.Buckets);
//             // const result = await this.client.listBuckets({});

//         } catch (error) {
//             console.error(error);
//         }


//     }

//     setting() {
//         this.client = new AWS.S3({
//             accessKeyId: '31QTFQO80GZFYNGU0O4T',
//             secretAccessKey: 'bJoHQi1Go9Et70tWcdiOamdJrCXIUBK423X1dcJc',
//             region: 'hn',
//             endpoint: 'https://ss-hn-1.bizflycloud.vn',
//             apiVersion: '2006-03-01'
//         });

//         this.newClient = new S3Client({
//             region: 'hn',
//             endpoint: 'https://ss-hn-1.bizflycloud.vn',
//             apiVersion: '2006-03-01',
//             credentials: {
//                 accessKeyId: '31QTFQO80GZFYNGU0O4T',
//                 secretAccessKey: 'bJoHQi1Go9Et70tWcdiOamdJrCXIUBK423X1dcJc'
//             }
//         });
//     }
// }