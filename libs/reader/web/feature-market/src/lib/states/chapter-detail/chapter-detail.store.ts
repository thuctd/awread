import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Chapter } from '../../models';

export interface ChapterDetailState extends EntityState<Chapter>, ActiveState { };


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' chapter-detail', resettable: true })
export class ChapterDetailStore extends EntityStore<ChapterDetailState> {
  // ui: EntityUIStore<ChapterDetailUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
