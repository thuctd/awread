import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ChapterDetailStore } from './chapter-detail.store';

@Injectable({ providedIn: 'root' })
export class ChapterDetailService {

  constructor(
    private chapterDetailStore: ChapterDetailStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.chapterDetailStore.update(entities)));
  }

}
