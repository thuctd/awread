import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[notReady]',
})
export class notReadyDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('click', ['$event'])
  clickEvent() {
    console.log('Tính năng này đang hoàn thiện');
    alert('Tính năng này đang hoàn thiện');
  }
}
