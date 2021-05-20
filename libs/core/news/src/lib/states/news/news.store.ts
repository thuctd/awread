import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { News } from '../../models';

export enum VISIBILITY_FILTER {
    SHOW_ALL = 'SHOW_ALL'
}

export interface NewsState extends EntityState<News>, ActiveState {
  ui: {
    filter: VISIBILITY_FILTER;
  };
}
const initialState = {
  ui: { 
    filter: VISIBILITY_FILTER.SHOW_ALL
   }
};

// export interface NewsUI {}

// export interface NewsUIState extends EntityState<NewsUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' news', resettable: true })
export class NewsStore extends EntityStore<NewsState> {
  // ui: EntityUIStore<NewsUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
