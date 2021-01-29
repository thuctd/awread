import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Inject,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  title: string;
  content: string;
}

@Component({
  selector: 'template-read',
  templateUrl: './read.template.html',
  styleUrls: ['./read.template.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadTemplate implements OnInit {
  
  constructor(public dialogRef: MatDialogRef<ReadTemplate>,
            @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const element = document.getElementById('content');
    if(this.data.content === '') {
      element.innerHTML = `<i>Hãy viết gì đó...</i>`;
    }else{
      element.innerHTML = this.data.content;
    }
  }
}
