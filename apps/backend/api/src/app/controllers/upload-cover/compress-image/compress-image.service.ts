import { Injectable } from '@nestjs/common';
import sharp from 'sharp';
import { Logger } from '@nestjs/common';
@Injectable()
export class CompressImage {
  sizes = {
    s: '112x144',
    m: '192x256',
    l: '216x288',
    xl: '256x356',
    detail: '372x496'
  }
  async convertToWebp(imageSource) {
    return await sharp(imageSource)
      .resize({ width: 500, height: 450 })
      .toFormat('webp')
      .webp({ quality: 50 })
  }
}
