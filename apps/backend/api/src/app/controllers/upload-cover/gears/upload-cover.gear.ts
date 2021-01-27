import { Injectable } from '@nestjs/common';
import { S3Addon, SharpAddon } from '../addons';
import { AvatarSizes, CoverSizes, ImageType } from '../models';
import { UploadInfo } from '../models/upload-info';

@Injectable()
export class UploadCoverGear {
  bucketS3 = 'awread-bucket';
  constructor(
    private sharpAddon: SharpAddon,
    private s3Addon: S3Addon,
  ) {
  }

  private getImagePack({ type, id }: UploadInfo) {
    switch (type) {
      case 'avatar':
        return {
          imageSizes: AvatarSizes,
          prefix: `users/${id}`
        };
      case 'cover':
        return {
          imageSizes: CoverSizes,
          prefix: `books/${id}`
        };
      default:
        return {
          imageSizes: null,
          prefix: id ? `unknown/${id}` : `unknown`
        };
    }
  }

  private getFileName(file) {
    const { originalname } = file;
    const name = originalname.split('.')[originalname.split('.').length - 2];
    const extension = originalname.split('.')[originalname.split('.').length - 1]
    return {
      name, extension
    }
  }

  async upload(file, uploadInfo: UploadInfo) {
    const { name, extension } = this.getFileName(file);
    const imagePack = this.getImagePack(uploadInfo);
    const multiVersionBuffersWebp = await this.sharpAddon.convertToMultiImageVersions(file.buffer, imagePack.imageSizes);
    const errors = await this.s3Addon.uploadMulti([
      ...multiVersionBuffersWebp,
      {
        extension,
        sizeName: 'origin',
        buffer: file.buffer,
      }
    ], this.bucketS3, name, imagePack.prefix);
    // console.log('result multi upload', result);
    return this.finalResult(errors);
  }

  finalResult(errors) {
    if (errors.filter(error => error).length) {
      console.warn('upload image error', errors);
      return { status: 1, message: 'failed', error: errors }
    } else {
      return { status: 0, message: 'success"' }
    }
  }

}
