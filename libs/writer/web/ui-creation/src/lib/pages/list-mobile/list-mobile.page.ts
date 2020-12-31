import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ListPage } from '../list/list.page';

@Component({
  selector: 'page-list-mobile',
  templateUrl: './list-mobile.page.html',
  styleUrls: ['./list-mobile.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListMobilePage extends ListPage {}
