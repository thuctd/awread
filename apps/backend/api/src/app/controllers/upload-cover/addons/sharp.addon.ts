import { Injectable } from '@nestjs/common';
import sharp from 'sharp';
import { Logger } from '@nestjs/common';

@Injectable()
export class SharpAddon {
  sizes = {
    s: '112x144',
    m: '192x256',
    l: '216x288',
    xl: '256x356',
    detail: '372x496'
  }
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

  async convertToMultiImageVersions(imageSource: Buffer) {
    const imageVersions = {};
    for (const [sizeName, sizeNumber] of Object.entries(this.sizes)) {
      imageVersions[sizeName] = this.convertToWebp(imageSource, sizeNumber);
    }
  }
}
