import { Injectable } from '@angular/core';
import { SettingGear } from '../gears';
import { SettingQuery } from '../states/setting';

@Injectable({ providedIn: 'root' })
export class SettingFacade {
  setting$ = this.settingQuery.select();
  storage$ = this.settingQuery.select(state => state.storage);
  constructor(
    private settingGear: SettingGear,
    private settingQuery: SettingQuery,
  ) {
  }

  get() {
    return this.settingGear.get();
  }

  getStorage() {
    return this.settingQuery.getValue().storage;
  }

}
