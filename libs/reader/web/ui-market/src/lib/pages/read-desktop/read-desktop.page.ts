import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';
import { ReadPage } from '../read/read.page';

@Component({
  selector: 'ui-read-desktop',
  templateUrl: './read-desktop.page.html',
  styles: [
    `
      :host {
        display: block;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class ReadDesktopPage extends ReadPage {
  @HostListener('document:keydown.F12', ['$event']) f12(event: KeyboardEvent) {
    event.preventDefault();
  }
  @HostListener('document:contextmenu', ['$event']) contextmenu(event: KeyboardEvent) {
    event.preventDefault();
  }
}
