import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import type { ThemePalette } from '@angular/material/core';
import type { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'awread-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent implements OnInit {
  @Input() color: ThemePalette = 'primary';
  @Input() mode: ProgressSpinnerMode = 'indeterminate';
  @Input() value = 50;
  constructor() { }

  ngOnInit(): void { }
}
