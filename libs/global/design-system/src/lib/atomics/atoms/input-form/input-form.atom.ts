import { Component, OnInit, ChangeDetectionStrategy, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'input-form',
  templateUrl: './input-form.atom.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputFormAtom implements OnInit {
  @Input() type = 'text';
  @Input() placeholder = 'Email Address';
  @Input() inputControl: FormControl = new FormControl('');
  @Input() faIcon = faEnvelope;
  @Input() id = this.placeholder.replace(/\s/g, '-') + Math.random();
  @Output() enter = new EventEmitter();
  constructor(
    private fb: FormBuilder,
    private elementRef: ElementRef,
  ) { }

  ngOnInit(): void { }

  focus() {
    this.elementRef.nativeElement.querySelector('input').focus();
  }
}
