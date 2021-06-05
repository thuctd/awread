import { Injectable } from '@angular/core';
import { UploadImageGear } from '../gears';

@Injectable({ providedIn: 'root' })
export class UploadImageFacade {

  constructor(
    private uploadImageGear: UploadImageGear,
  ) {
  }
  uploadAvatar(blob, userId) {
    return this.uploadImageGear.uploadAvatar(blob, userId);
  }
  uploadCover(blob, bookId) {
    return this.uploadImageGear.uploadCover(blob, bookId);
  }

}
