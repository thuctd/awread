import { Injectable } from '@nestjs/common';
import { UploadCoverGear } from '../gears';

@Injectable()
export class UploadCoverFacade {

  constructor(
    private uploadCoverGear: UploadCoverGear
  ) {
  }

  upload(file) {
    this.uploadCoverGear.upload(file);
  }

}
