import { Component, OnInit, ChangeDetectionStrategy, Inject, Optional } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
export interface DialogData {
  title: string;
  content: string;
}

@Component({
  selector: 'template-read',
  templateUrl: './wrt-writing-popup-read.template.html',
  styleUrls: ['./wrt-writing-popup-read.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtWritingPopupReadTemplate implements OnInit {
  constructor(@Optional() public dialogRef: MatDialogRef<WrtWritingPopupReadTemplate>, @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const element = document.getElementById('content');
    if (this.data.content === '') {
      element.innerHTML = `<i>Hãy viết gì đó...</i>`;
    } else {
      element.innerHTML = this.data.content;
    }
  }
}
