import { Injectable } from '@angular/core';
import { UploadImageApi } from '../apis';
import { CurrentUserFacade } from '@awread/core/users';

@Injectable({ providedIn: 'root' })
export class UploadImageGear {

  constructor(
    private uploadImageApi: UploadImageApi,
    private currentUserFacade: CurrentUserFacade
  ) {
  }

  uploadAvatar(blob) {
    return this.uploadImageApi.up(blob, 'avatar', this.currentUserFacade.getUserId());
  }

  uploadCover(blob, bookId: string) {
    return this.uploadImageApi.up(blob, 'cover', bookId);
  }

}
