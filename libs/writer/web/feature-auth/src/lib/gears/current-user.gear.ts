import { Injectable } from '@angular/core';
import { CurrentUserApi } from '../apis/current-user.api';

@Injectable({ providedIn: 'root' })
export class CurrentUserGear {

  constructor(
    private currentUserApi: CurrentUserApi,
  ) {
  }

  get() {
    this.currentUserApi.get();
  }

  update() {
    this.currentUserApi.update();
  }

}
