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
          prefix: `users`
        };
      case 'cover':
        return {
          imageSizes: CoverSizes,
          prefix: `books`
        };
      default:
        return {
          imageSizes: null,
          prefix: id ? `unknown` : `unknown`
        };
    }
  }

  private getFileName(file, uploadInfo) {
    if (file && file.originName) {
      const { originalname } = file;
      const name = originalname.split('.')[originalname.split('.').length - 2];
      const extension = originalname.split('.')[originalname.split('.').length - 1]
      console.log('file', file);
      return {
        name, extension
      }
    } else {
      console.log('uploadInfo', uploadInfo.name, uploadInfo.extension);
      return {
        name: uploadInfo.name,
        extension: uploadInfo.extension
      }
    }
  }

  async upload(file, uploadInfo: UploadInfo) {
    // console.log('file', file);
    // console.log('uploadInfo', uploadInfo);
    const { name, extension } = this.getFileName(file, uploadInfo);
    const imagePack = this.getImagePack(uploadInfo);
    const content = file ? file.buffer : this.convertToBuffer(uploadInfo.file);
    const multiVersionBuffersWebp = await this.sharpAddon.convertToMultiImageVersions(content, imagePack.imageSizes);
    const errors = await this.s3Addon.uploadMulti([
      ...multiVersionBuffersWebp,
      {
        extension,
        sizeName: 'origin',
        buffer: content,
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

  convertToBuffer(imageSource: string | Buffer) {
    if (!(imageSource instanceof Buffer)) {
      const uri = (imageSource as any).split(';base64,').pop();
      imageSource = Buffer.from(uri, 'base64');
    }
    return imageSource;
  }
}
