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
    const extension = originalname.split('.')[originalname.split('.').length - 1]
    const bucketS3 = 'awread-bucket';
    // const compressedBuffer = await this.sharpAddon.convertToWebp(file.buffer);
    const multiVersionBuffersWebp = await this.sharpAddon.convertToMultiImageVersions(file.buffer);
    // console.log('upload-cover: multiVersionBuffers', multiVersionBuffersWebp);
    const errors = await this.s3Addon.uploadMulti([
      ...multiVersionBuffersWebp,
      {
        extension,
        sizeName: 'origin',
        buffer: file.buffer,
      }
    ], bucketS3, name, 'books/covers');
    // console.log('result multi upload', result);
    if (errors.filter(error => error).length) {
      console.warn('upload image error', errors);
      return { status: 1, message: 'failed', error: errors }
    } else {
      return { status: 0, message: 'success"' }
    }
  }

}
