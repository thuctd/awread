import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SliderStore } from './slider.store';

@Injectable({ providedIn: 'root' })
export class SliderService {

  constructor(
    private sliderStore: SliderStore,
  ) {
  }

  get() {
    return of([]).pipe(tap(entities => this.sliderStore.update(entities)));
  }

}
