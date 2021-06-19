import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UploadImageFacade } from '@awread/feature/upload-image';
import { SnackbarService } from '@awread/global/packages';
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
  aspectRatio;
  constructor(
    public matDialogRef: MatDialogRef<PopupChangeCoverOrgan>,
    private cd: ChangeDetectorRef,
    private uploadImageFacade: UploadImageFacade,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private snackbarService: SnackbarService,
  ) { }

  ngOnInit(): void {
    if (this.data.mode == 'avatar') {
      this.title = 'Chọn ảnh đại diện';
    } else {
      this.aspectRatio = 288 / 384;
    }
  }

  eventChooseImage($event) {
    this.status = 'reposition';
  }

  submitEvent(croppedImage) {
    // console.log(croppedImage);
    this.status = 'loading';
    if (croppedImage) {
      let upload$;
      if (this.data.mode == 'avatar') {
        upload$ = this.uploadImageFacade.uploadAvatar(croppedImage, this.data.id);
      } else {
        upload$ = this.uploadImageFacade.uploadCover(croppedImage, this.data.id);
        this.cd.detectChanges();
      }
      //save image
      upload$.subscribe(event => {
        // console.log('event', event);
        if (event.type === HttpEventType.DownloadProgress) {
          // console.log("download progress");
          this.updatePercent(Math.round(event.loaded * 100 / event.total));
        }
        if (event.type === HttpEventType.Response) {
          // console.log("download completed");
          this.updatePercent(80);
        }
        if (event instanceof HttpResponse) {
          if (event.ok) {
            setTimeout(() => {
              this.updatePercent(90);
              setTimeout(() => {
                this.updatePercent(100);
                setTimeout(() => {
                  this.matDialogRef.close({ success: event.ok });
                }, 500);
              }, 500);
            }, 500);
          } else {
            this.snackbarService.showError('Đăng ảnh thất bại');
          }
        }
      }, error => {
        console.warn('upload image failed', error);
        this.snackbarService.showError('Đăng ảnh thất bại');
      })
    } else {
      this.matDialogRef.close();
    }
  }

  updatePercent(percent: number) {
    this.percentLoading = `${percent}%`;
    this.cd.detectChanges();
  }
}
