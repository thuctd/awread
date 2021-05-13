import { FormGroup } from '@angular/forms';
import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'wrt-account-complete',
  templateUrl: './wrt-account-complete.organ.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WrtAccountCompleteOrgan implements OnInit {
  @Output() linkSocialEvent = new EventEmitter();
  @Output() completeEvent = new EventEmitter();
  @Input() formComplete: FormGroup = this.fb.group({
    lastname: ['', []],
    middlename: ['', []],
    firstname: ['', []],
  });
  title = 'Hoàn tất thông tin';
  description = 'Hãy cho chúng tôi biết thêm về bạn để có thể giúp bạn trải nghiệm tốt hơn nhé';
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void { }
}
