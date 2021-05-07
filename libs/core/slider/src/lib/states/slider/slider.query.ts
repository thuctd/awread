import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { SliderStore, SliderState } from './slider.store';
// import { SliderStore, SliderState, SliderUIState } from './slider.store';

@Injectable({ providedIn: 'root' })
export class SliderQuery extends QueryEntity<SliderState> {
  slider$ = this.selectAll();
  // ui: EntityUIQuery<SliderUIState>;
  constructor(protected store: SliderStore) {
    super(store);
    // this.createUIQuery();
  }

}
