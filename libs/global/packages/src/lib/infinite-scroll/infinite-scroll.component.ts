import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'infinite-scroll',
  template: `<ng-content></ng-content><div #anchor></div>`,
  styles: [`
  :host {
    display: block;
    /* height: 80vh; */
    height: -moz-calc(100vh - 10rem);
    height: -webkit-calc(100vh - 10rem);
    height: calc(100vh - 10rem);
    overflow-y: auto;
  }
  `]
})

export class InfiniteScrollComponent implements OnInit, OnDestroy {
  @Input() options = {
    rootMargin: '0px 0px 200px 0px',
  };
  @Output() scrolled = new EventEmitter();
  @ViewChild('anchor', { static: true }) anchor: ElementRef<HTMLElement>;

  private observer: IntersectionObserver;

  constructor(private host: ElementRef) { }

  get element() {
    return this.host.nativeElement;
  }

  ngOnInit() {
    console.log('host', this.host, this.anchor);
    const options = {
      root: this.isHostScrollable() ? this.host.nativeElement : null,
      ...this.options
    };

    this.observer = new IntersectionObserver(([entry]) => {
      console.log('entry', entry.isIntersecting, entry);
      if (entry.isIntersecting) {
        this.scrolled.emit();
      }
    }, options);

    this.observer.observe(this.anchor.nativeElement);
  }

  private isHostScrollable() {
    const style = window.getComputedStyle(this.element);

    return style.getPropertyValue('overflow') === 'auto' ||
      style.getPropertyValue('overflow-y') === 'scroll';
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
