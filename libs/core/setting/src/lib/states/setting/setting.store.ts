import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface SettingState {
  storage: string;
  version: string;
}

export function createInitialState(): SettingState {
  return {
    storage: '',
    version: ''
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'setting', resettable: true })
export class SettingStore extends Store<SettingState> {

  constructor() {
    super(createInitialState());
  }

}
