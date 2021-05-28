import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { SettingApi } from '../apis';
import { SettingStore } from '../states/setting';

@Injectable({ providedIn: 'root' })
export class SettingGear {

  constructor(
    private settingApi: SettingApi,
    private settingStore: SettingStore,
  ) {
  }

  get() {
    return this.settingApi.get().pipe(
      tap(value => this.settingStore.update(value))
    )
  }

}
