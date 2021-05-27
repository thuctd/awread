import { Injectable } from '@angular/core';
import { UploadImageGear } from '../gears';

@Injectable({ providedIn: 'root' })
export class UploadImageFacade {

  constructor(
    private uploadImageGear: UploadImageGear,
  ) {
  }
  uploadAvatar(blob) {
    return this.uploadImageGear.uploadAvatar(blob);
  }
  uploadCover(blob, bookId: string) {
    return this.uploadImageGear.uploadCover(blob, bookId);
  }

}
