import { Injectable } from '@angular/core';
import { UploadImageApi } from '../apis';

@Injectable({ providedIn: 'root' })
export class UploadImageGear {

  constructor(
    private uploadImageApi: UploadImageApi,
  ) {
  }

  uploadAvatar(blob, userId) {
    return this.uploadImageApi.up(blob, 'avatar', userId);
  }

  uploadCover(blob, bookId: string) {
    return this.uploadImageApi.up(blob, 'cover', bookId);
  }

}
