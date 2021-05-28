import { Injectable } from '@angular/core';
import { SettingGear } from '../gears';

@Injectable({ providedIn: 'root' })
export class SettingFacade {

  constructor(
    private settingGear: SettingGear,
  ) {
  }

  get() {
    return this.settingGear.get();
  }

}
