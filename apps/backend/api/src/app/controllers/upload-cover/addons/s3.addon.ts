import { Injectable } from '@nestjs/common';
import { S3, S3Client, ListBucketsCommand, PutObjectCommand } from '@aws-sdk/client-s3';
import { Logger } from '@nestjs/common';
@Injectable()
export class S3Addon {
  newClient: S3Client;
  constructor() {
    this.setting();
    this.listBucket();
  }

  async listBucket() {
    try {
      const bucketParams = {
        Bucket: 'awread-bucket',
        Delimiter: '/',
        Prefix: 'hiepxanh/',
      }
      const data = await this.newClient.send(new ListBucketsCommand({}));
      console.log('Success', data.Buckets);
      // const result = await this.client.listBuckets({});

    } catch (error) {
      console.error(error);
    }
  }

  setting() {
    this.newClient = new S3Client({
      region: 'hn',
      endpoint: 'https://ss-hn-1.bizflycloud.vn',
      apiVersion: '2006-03-01',
      credentials: {
        accessKeyId: '31QTFQO80GZFYNGU0O4T',
        secretAccessKey: 'bJoHQi1Go9Et70tWcdiOamdJrCXIUBK423X1dcJc'
      }
    });
  }

  async uploadFile(file) {
    const { originalname } = file;
    const bucketS3 = 'awread-bucket';
    await this.uploadS3(file.buffer, bucketS3, originalname);
  }

  async uploadMulti(buffers: { [kind: string]: Buffer }, bucket: string, name: string, extName: string) {
    return Promise.all(Object
      .entries(buffers)
      .map(async ([kind, buffer]) => {
        let fullname: string;
        switch (kind) {
          case 'webp':
            fullname = `${kind}/${name}.${kind}`
            break;
          default:
            fullname = `${kind}/${name}.${extName}`
            break;
        }
        try {
          return this.uploadS3(buffer, bucket, fullname)
        } catch (error) {
          return error
        }
      })
      .filter(error => error)
    )
  }

  async uploadS3(fileBuffer: Buffer, bucket: string, name: string) {
    const uploadParams = {
      Bucket: bucket,
      Key: String(name),
      Body: fileBuffer,
      ACL: 'public-read'
    };

    try {
      const data = await this.newClient.send(new PutObjectCommand(uploadParams));
      console.log('Success', data);
    } catch (err) {
      Logger.error(err);
      console.log('Error', err);
    }
  }

}
