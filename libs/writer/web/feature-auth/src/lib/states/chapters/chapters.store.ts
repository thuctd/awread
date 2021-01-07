import { Injectable } from '@angular/core';
import {
  EntityState,
  EntityStore,
  StoreConfig,
  ActiveState,
} from '@datorama/akita';
import { Chapter } from '../models';

export enum VISIBILITY_FILTER {
  SHOW_ALL = 'SHOW_ALL',
}

export interface ChaptersState extends EntityState<Chapter>, ActiveState {
  ui: {
    filter: VISIBILITY_FILTER;
  };
}
const initialState = {
  ui: {
    filter: VISIBILITY_FILTER.SHOW_ALL,
  },
};

// export interface ChapterUI {}

// export interface ChaptersUIState extends EntityState<ChapterUI>, ActiveState {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'dasherize(name)', resetable: true })
export class ChaptersStore extends EntityStore<ChaptersState> {
  // ui: EntityUIStore<ChapterUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }
}
