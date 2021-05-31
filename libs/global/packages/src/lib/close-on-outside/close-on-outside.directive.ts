import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[closeOnOutSide]',
})
export class CloseOnOutsideDirective {
  show = false;
  @Output() clickedOutside = new EventEmitter<void>();

  @HostListener('document:click', ['$event'])
  documentClicked({ target }: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(target)) {
      this.show = false;
      this.clickedOutside.emit();
    }
  }

  @HostListener('window:keydown.Escape')
  escapedClicked(): void {
    this.show = false;
    this.clickedOutside.emit();
  }
  constructor(private elementRef: ElementRef) {
    // console.log('click outside here');
  }
}
