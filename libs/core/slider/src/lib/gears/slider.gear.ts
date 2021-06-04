import { SliderApi } from './../apis/slider.api';
import { Injectable } from '@angular/core';
import { SliderStore } from '../states/slider';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SliderGear {

  constructor(
    private sliderStore: SliderStore,
    private sliderApi: SliderApi
  ) {
  }

  getAllSlider() {
    return this.sliderApi.getAllSlider().pipe(
      tap((res) => {
        this.sliderStore.set(res);
      }),
    );
  }

}
