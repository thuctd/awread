import { Injectable } from '@nestjs/common';
import { S3Addon, SharpAddon } from '../addons';

@Injectable()
export class UploadCoverGear {

  constructor(
    private sharpAddon: SharpAddon,
    private s3Addon: S3Addon,
  ) {
  }

  async upload(file) {
    const { originalname } = file;
    const name = originalname.split('.')[originalname.split('.').length - 2];
    const extName = originalname.split('.')[originalname.split('.').length - 1]
    const bucketS3 = 'awread-bucket';
    const compressedBuffer = await this.sharpAddon.convertToWebp(file.buffer);
    const errors = await this.s3Addon.uploadMulti({
      origin: file.buffer,
      webp: compressedBuffer
    }, bucketS3, name, extName);
    // console.log('result multi upload', result);
    if (errors.length) {
      console.warn('upload image error');
      return { status: 1, message: 'failed', error: errors }
    } else {
      return { status: 0, message: 'success"' }
    }
  }

}
