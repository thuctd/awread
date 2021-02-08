import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'template-popup-edit-cover-book',
  templateUrl: './popup-edit-cover-book.template.html',
  styles: [
    `
      :host {
        display: block;
        height:100%;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupEditCoverBookTemplate implements OnInit {

  @Input() title = "Chọn ảnh bìa sách";
  controlName = new FormControl('');
  status = 'pending';
  percentLoading = '10%';
  constructor(
    public matDialogRef: MatDialogRef<PopupEditCoverBookTemplate>
  ) { }

  ngOnInit(): void {
  }
  
  eventChooseImage($event){
    this.status = 'loading';
    console.log(this.controlName.value);
    setTimeout(() => {
      this.status = 'reposition';
      console.log(this.status);
    }, 3000);

  }

  submitEvent(event){
    console.log(event);
    if(event == 'close'){
      this.matDialogRef.close();
    }else{
      //save image
    }
  }
}
