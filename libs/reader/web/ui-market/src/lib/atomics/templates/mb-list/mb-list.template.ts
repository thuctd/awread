import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, ChangeDetectorRef, OnChanges } from '@angular/core';

@Component({
  selector: 'template-mb-list',
  templateUrl: './mb-list.template.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MbListTemplate implements OnInit, OnChanges {
  isMenu = true;
  @Input() titlePage;
  @Input() books = [];
  @Input() topBooks = [];
  @Input() items = [];
  @Output() emitChangeBooks = new EventEmitter();

  constructor(
    private activatedRoute: ActivatedRoute,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void { }

  ngOnChanges(): void {
    this.watchTitle();
  }

  watchTitle() {
    this.activatedRoute.parent.url.subscribe(([urlSegment]) => {
      const categoryId = urlSegment.parameterMap.get('categoryId');
      if (categoryId !== '') {
        this.isMenu = false;
        switch (urlSegment.parameterMap.get('categoryId')) {
          case '1':
            this.titlePage = 'Truyện ngắn';
            break;
          case '2':
            this.titlePage = 'Truyện dài';
            break;
          case '3':
            this.titlePage = 'Tản văn';
            break;
        }
      }
      this.cd.detectChanges();
    })
  }
}
