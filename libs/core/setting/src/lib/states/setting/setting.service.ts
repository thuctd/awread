import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { SettingStore } from './setting.store';

@Injectable({ providedIn: 'root' })
export class SettingService {

  constructor(
    private settingStore: SettingStore,
  ) {
  }

  get() {
    return of({}).pipe(tap(entities => this.settingStore.update(entities)));
  }

}
