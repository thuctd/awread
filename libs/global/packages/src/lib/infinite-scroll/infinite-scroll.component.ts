import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, Input, OnDestroy, Renderer2 } from '@angular/core';

@Component({
  selector: 'infinite-scroll',
  template: `<ng-content></ng-content><div #anchor></div>`,
  styles: [`
  :host {
    
  }
  `]
})

export class InfiniteScrollComponent implements OnInit, OnDestroy {
  @Input() options = {
    rootMargin: '0px 0px 300px 0px',
  };
  @Input() customStyle = `
        display: block;
        height: -moz-calc(100vh - 10rem);
        height: -webkit-calc(100vh - 10rem);
        height: calc(100vh - 10rem);
        overflow-y: auto;
      `;
  @Input() customClass = `my-infinite-scroll`;
  @Input() usingWindowScroll = false;
  @Output() scrollIsIntersecting = new EventEmitter();
  @ViewChild('anchor', { static: true }) anchor: ElementRef<HTMLElement>;

  private observer: IntersectionObserver;

  constructor(
    private host: ElementRef,
    private renderer: Renderer2
  ) { }

  get element() {
    return this.host.nativeElement;
  }

  ngOnInit() {
    console.log('host', this.host, this.anchor, this.usingWindowScroll);
    this.renderer.addClass(this.host.nativeElement, this.customClass);
    this.renderer.setAttribute(this.host.nativeElement, 'style', this.customStyle);
    if (this.usingWindowScroll == true) {
      this.renderer.setAttribute(this.host.nativeElement, 'style', '');
    }

    const options = {
      root: this.isHostScrollable() ? this.host.nativeElement : null,
      ...this.options
    };

    this.observer = new IntersectionObserver(([entry]) => {
      console.log('entry', entry.isIntersecting, entry);
      if (entry.isIntersecting) {
        this.scrollIsIntersecting.emit();
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
