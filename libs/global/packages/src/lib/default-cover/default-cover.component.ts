import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, ChangeDetectorRef, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild, OnChanges } from '@angular/core';
import { Observable, Subject, combineLatest, of } from 'rxjs';
import { debounceTime, takeUntil, share, startWith, take, map } from 'rxjs/operators';

const ratio = {
  width: 518,
  height: 740,
}
declare global {
  interface CanvasRenderingContext2D {
    getLines(text: string, maxWidth: number,): any;
    wrapText(text: string, x: number, y: number, maxWidth: number, lineHeight: number): any;
  }
}

Object.defineProperty(CanvasRenderingContext2D.prototype, 'getLines', {
  enumerable: false,
  value(text, maxWidth) {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = words[0];

    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = this.measureText(currentLine + " " + word).width;
      if (width < maxWidth) {
        currentLine += " " + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  }
});

Object.defineProperty(CanvasRenderingContext2D.prototype, 'wrapText', {
  enumerable: false,
  value(text, x, y, maxWidth, lineHeight) {
    const lines = this.getLines(text, maxWidth);
    let startY = y - (lines.length ? lines.length * lineHeight / 2 : 0);
    for (let i = 0; i < lines.length; i++) {
      this.fillText(lines[i], x, startY += lineHeight)
    };
  }
});

@Component({
  selector: 'awread-default-cover',
  templateUrl: './default-cover.component.html',
  styleUrls: ['./default-cover.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DefaultCoverComponent implements OnInit, OnChanges {
  @Input() title = "Welcome to Awread this is demo cover";
  @Input() author = "Example author";
  @ViewChild('canvas') canvas: ElementRef;
  customCoverImage;
  constructor(
    private cd: ChangeDetectorRef,
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    console.log('changes', changes);
    this.canvasGenerate();
  }


  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.canvasGenerate();
  }


  canvasGenerate() {
    const canvas = this.canvas.nativeElement as HTMLCanvasElement;
    const context = canvas.getContext("2d");
    const imageObj = new Image();
    imageObj.onload = () => {
      if (context) {
        context.drawImage(imageObj, 0, 0, imageObj.width, imageObj.height, 0, 0, ratio.width, ratio.height);
        context.font = "26pt Calibri";
        context.textAlign = 'center';
        context.fillText(this.author, 250, 80);
        this.drawTitle(context, this.title);
      }
    };
    imageObj.src = "/global-assets/images/default-cover.jpeg";

    setTimeout(() => {
      // console.log('preview image', canvas.toDataURL("image/jpeg"));
      this.customCoverImage = canvas.toDataURL("image/jpeg");
      this.cd.detectChanges();
    }, 500);
  }

  private drawTitle(context: CanvasRenderingContext2D, title) {
    context.font = "36pt Calibri";
    context.wrapText(title, 250, 530, 400, 50);
  }

}
