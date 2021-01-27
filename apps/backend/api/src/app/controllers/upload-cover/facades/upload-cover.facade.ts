import { Injectable } from '@nestjs/common';
import { UploadCoverGear } from '../gears';
import { ImageType, UploadInfo } from '../models';

@Injectable()
export class UploadCoverFacade {

  constructor(
    private uploadCoverGear: UploadCoverGear
  ) {
  }

  upload(file, uploadInfo: UploadInfo) {
    this.uploadCoverGear.upload(file, uploadInfo);
  }

}
