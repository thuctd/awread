import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SliderGear } from '../gears/slider.gear';
import { SliderQuery } from '../states/slider';

@Injectable({ providedIn: 'root' })
export class SliderFacade {
  slider$ = this.selectAllSliderAkita();

  constructor(
    private sliderGear: SliderGear,
    private sliderQuery: SliderQuery
  ) {
  }

  selectAllSliderAkita() {
    return this.sliderQuery.selectAll()
      .pipe(
        map(data => data.map(item => ({ ...item })))
      );
  }

  getAllSlider() {
    return this.sliderGear.getAllSlider();
  }

}
