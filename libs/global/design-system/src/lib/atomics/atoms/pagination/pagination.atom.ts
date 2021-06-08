import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, OnChanges, ChangeDetectorRef, AfterViewInit, SimpleChanges } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationAtom implements OnInit, OnChanges {
  @Input() totalRecords = 0;
  @Input() recordsPerPage = 0;
  @Input() eventResetPagination;
  @Output() pageChange = new EventEmitter<number>();
  padginateReady = new Subject();
  public pages: Array<string | number> = [];
  pageCount = 0;
  // activePage = 1;
  @Input() currentPage = 1;

  constructor(
    private cd: ChangeDetectorRef,
  ) { }

  ngOnInit(): void {
    // this.padginateReady
    //   .pipe(take(1))
    //   .subscribe(ready => {
    //     this.eventResetPagination.subscribe(() => {
    //       this.activePage = 1;
    //       console.log('event reset padgination trigged', this.activePage);
    //     })
    //   })
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('changes', changes.eventResetPagination);
    // if (changes && changes.eventResetPagination && changes.eventResetPagination.currentValue) {
    //   this.padginateReady.next();
    // }

    this.pageCount = this.getPageCount();
    this.pages = this.pageCount <= 10 ? this.getArrayShort(this.pageCount, 1) : this.getArrayOfPageFirst(this.pageCount, 1);
  }

  private getPageCount(): number {
    let toTalPage = 0;

    if (this.totalRecords > 0 && this.recordsPerPage > 0) {
      const pageCount = this.totalRecords / this.recordsPerPage;
      const roundedPageCount = Math.floor(pageCount);
      toTalPage = roundedPageCount < pageCount ? roundedPageCount + 1 : roundedPageCount;
    }
    return toTalPage;
  }
  // Lấy danh sách khi tổng số trang dưới 10
  private getArrayShort(pageCount: number, pageStart: number): number[] {
    const pageArray: number[] = [];
    for (let i = 1; i <= pageCount; i++) {
      pageArray.push(i);
    }
    return pageArray;
  }
  // Lấy danh sách trang khi ở 5 trang đầu hoặc 5 trang cuối
  private getArrayOfPageFirst(pageCount: number, pageStart: number): Array<string | number> {
    const pageArray: Array<string | number> = [];
    if (pageStart === 1) {
      for (let i = 1; i <= 5; i++) {
        pageArray.push(i)
      }
      pageArray.push("...");
      pageArray.push(pageCount);
    }
    else {
      pageArray.push(1);
      pageArray.push("...")
      for (let i = pageStart; i <= pageCount; i++) {
        pageArray.push(i)
      }
    }
    return pageArray;
  }
  // Lấy danh sách trang khi trang ở giữa
  private getArrayOfPageMiddle(pageCount: number, pageStart: number): Array<string | number> {
    const pageArrayMiddle: Array<string | number> = [];
    pageArrayMiddle.push(1);
    pageArrayMiddle.push("...")
    for (let i = 1; i <= 3; i++) {

      pageArrayMiddle.push(pageStart);
      pageStart++;
    }
    pageArrayMiddle.push("...");
    pageArrayMiddle.push(pageCount);
    return pageArrayMiddle;
  }
  onClickPage(pageNumber: number | string, i: number) {
    if (pageNumber < 1) return;
    if (pageNumber > this.pageCount) return;
    if (this.pageCount <= 10) {
      // this.activePage = +this.pages[i];
      // this.pageChange.emit(+this.activePage);
      this.pageChange.emit(+this.pages[i]);
    }
    else {
      if (i >= 4) {
        const value = this.pages[i - 1] === "..." ? +this.pages[i] : +this.pages[i - 1] + 1;
        this.pages = (this.pageCount - value < 4) ? this.getArrayOfPageFirst(this.pageCount, this.pageCount - 4) : this.getArrayOfPageMiddle(this.pageCount, value - 1);
        // this.activePage = value;
        // this.pageChange.emit(+this.activePage);
        this.pageChange.emit(value);
      }
      else if (i <= 2) {
        const value = this.pages[i + 1] === "..." ? +this.pages[i] : +this.pages[i + 1] - 1;
        this.pages = value < 5 ? this.getArrayOfPageFirst(this.pageCount, 1) : this.getArrayOfPageMiddle(this.pageCount, value - 1)
        // this.activePage = value;
        // this.pageChange.emit(+this.activePage);
        this.pageChange.emit(value);
      }
      else {
        // this.activePage = +this.pages[i];
        // this.pageChange.emit(+this.activePage);
        this.pageChange.emit(+this.pages[i]);
      }
    }
  }
  onClickArrow(pageNumber: number) {
    if (pageNumber < 1) { return; }
    else if (pageNumber > +this.pageCount) { return; }
    else {
      for (let i = 0; i < this.pages.length; i++) {
        if (pageNumber == +this.pages[i]) {
          this.onClickPage(pageNumber, i);
          return;
        }
      }
    }
  }
}
