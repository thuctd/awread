import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Chapter } from '../../models';

export interface ChaptersState extends EntityState<Chapter>, ActiveState { };


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' chapters', resettable: true, idKey: 'chapterId' })
export class ChaptersStore extends EntityStore<ChaptersState> {
  // ui: EntityUIStore<ChapterUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
