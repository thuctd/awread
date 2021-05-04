import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Slider } from '../../models';

export enum VISIBILITY_FILTER {
    SHOW_ALL = 'SHOW_ALL'
}

export interface SliderState extends EntityState<Slider>, ActiveState {
  ui: {
    filter: VISIBILITY_FILTER;
  };
}
const initialState = {
  ui: { 
    filter: VISIBILITY_FILTER.SHOW_ALL
   }
};

// export interface SliderUI {}

// export interface SliderUIState extends EntityState<SliderUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' slider', resettable: true })
export class SliderStore extends EntityStore<SliderState> {
  // ui: EntityUIStore<SliderUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
