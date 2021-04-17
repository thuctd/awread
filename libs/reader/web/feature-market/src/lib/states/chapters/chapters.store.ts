import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Chapter } from '../../models';

export interface ChaptersState extends EntityState<Chapter>, ActiveState { };

// export interface ChapterUI {}

// export interface ChaptersUIState extends EntityState<ChapterUI>, ActiveState {}
@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'dasherize(name)', resettable: true })
export class ChaptersStore extends EntityStore<ChaptersState> {
  // ui: EntityUIStore<ChapterUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
