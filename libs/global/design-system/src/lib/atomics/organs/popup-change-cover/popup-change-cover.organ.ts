import { Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

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
  ) { }

  ngOnInit(): void { }

  eventChooseImage($event) {
    // this.status = 'loading';
    // const [file] = $event.target.files
    // const reader = new FileReader();
    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = e => {
    //     console.log('result', !!this.sourceTarget);
    //     this.status = 'reposition';
    //     setTimeout(() => {
    //       this.cd.detectChanges();
    //     }, 100);
    //   };
    //   reader.readAsDataURL(file);
    // }
    this.status = 'reposition';

  }

  submitEvent(event) {
    console.log(event);
    if (event == 'close') {
      this.matDialogRef.close();
    } else {
      //save image
    }
  }
}
