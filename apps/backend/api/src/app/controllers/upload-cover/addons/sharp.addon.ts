import { Injectable } from '@nestjs/common';
import sharp from 'sharp';
import { Logger } from '@nestjs/common';
import { AvatarSizes, CoverSizes } from '../models';

@Injectable()
export class SharpAddon {

  constructor(
  ) {
  }
  async convertToWebp(imageSource: Buffer, size: string = '500x450', quality = 70) {
    const width = size.split('x')[0];
    const height = size.split('x')[1];
    return await sharp(imageSource)
      .resize({ width: +width, height: +height })
      .toFormat('webp')
      .webp({ quality })
      .toBuffer()
  }

  async convertToMultiImageVersions(imageSource: Buffer, sizes: typeof CoverSizes | typeof AvatarSizes | null, extension = 'webp') {
    const imageVersions = {};
    for (const [sizeName, sizeNumber] of Object.entries(sizes)) {
      imageVersions[sizeName] = this.convertToWebp(imageSource, sizeNumber);
    }
    if (!sizes) { return [] }
    return Promise.all(
      Object
        .entries(sizes)
        .map(this.convertEachSize(extension, imageSource))
    )
  }

  convertEachSize(extension: 'webp' | string, imageSource: Buffer) {
    return async ([sizeName, sizeNumber]) => {
      try {
        const result = {
          extension,
          sizeName,
          buffer: await this.convertToWebp(imageSource, sizeNumber)
        }
        return result;
      } catch (error) {
        return {
          extension,
          sizeName,
          buffer: null,
          error
        }
      }
    }
  }
}
