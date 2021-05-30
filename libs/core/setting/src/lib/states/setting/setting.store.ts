import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface SettingState {
  storage: string;
  version: string;
}

export function createInitialState(): SettingState {
  return {
    storage: 'https://awread-bucket.ss-hn-1.bizflycloud.vn',
    version: '1.0.0'
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'setting', resettable: true, idKey: 'settingId' })
export class SettingStore extends Store<SettingState> {

  constructor() {
    super(createInitialState());
  }

}
