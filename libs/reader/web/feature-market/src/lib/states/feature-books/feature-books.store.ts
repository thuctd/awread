import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, ActiveState } from '@datorama/akita';
import { Book } from '../../models';

export interface FeatureBooksState extends EntityState<Book>, ActiveState { };

// export interface FeatureBookUI {}

// export interface FeatureBooksUIState extends EntityState<FeatureBookUI>, ActiveState {}


@Injectable({ providedIn: 'root' })
@StoreConfig({ name: ' feature-books', resettable: true })
export class FeatureBooksStore extends EntityStore<FeatureBooksState> {
  // ui: EntityUIStore<FeatureBookUIState>;
  constructor() {
    super();
    // this.createUIStore().setInitialEntityState();
  }

}
