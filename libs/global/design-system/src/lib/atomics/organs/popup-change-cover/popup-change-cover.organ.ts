import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CurrentUserFacade } from '@awread/core/users';
import { UploadImageFacade } from '@awread/feature/upload-image';
@Component({
  selector: 'organ-popup-change-cover',
  templateUrl: './popup-change-cover.organ.html',
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopupChangeCoverOrgan implements OnInit {
  @Input() title = 'Chọn ảnh bìa sách';
  controlName = new FormControl('');
  status = 'pending';
  percentLoading = '10%';
  constructor(
    public matDialogRef: MatDialogRef<PopupChangeCoverOrgan>,
    private cd: ChangeDetectorRef,
    private uploadImageFacade: UploadImageFacade,
    private currentUserFacade: CurrentUserFacade,
  ) { }

  ngOnInit(): void { }

  eventChooseImage($event) {
    this.status = 'reposition';
  }

  submitEvent(croppedImage) {
    console.log(croppedImage);
    this.status = 'loading';
    if (croppedImage) {
      //save image
      this.uploadImageFacade.uploadAvatar(croppedImage).subscribe(event => {
        console.log('event', event);
        if (event.type === HttpEventType.DownloadProgress) {
          console.log("download progress");
          this.percentLoading = Math.round(event.loaded * 100 / event.total) + '%';
        }
        if (event.type === HttpEventType.Response) {
          console.log("download completed");
          this.percentLoading = '100%';
        }
        if (event instanceof HttpResponse) {
          if (event.ok) {
            this.matDialogRef.close();
            this.currentUserFacade.updateCurrentUser({ avatar: true })
          }
        }
      })
    } else {

      this.matDialogRef.close();
    }
  }
}
