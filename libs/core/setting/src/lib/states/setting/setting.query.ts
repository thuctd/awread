import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { SettingStore, SettingState } from './setting.store';

@Injectable({ providedIn: 'root' })
export class SettingQuery extends Query<SettingState> {

  constructor(protected store: SettingStore) {
    super(store);
  }

}
