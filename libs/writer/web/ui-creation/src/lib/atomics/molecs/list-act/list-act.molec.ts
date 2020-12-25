import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { faChartLine, faPlusCircle, faPlusSquare, faShareAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'list-act',
  templateUrl: './list-act.molec.html',
  styleUrls: ['./list-act.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListActMolec implements OnInit {

  @Input() btns = [{
    titleButton: 'Publish',
    faIcon: faChartLine,
  }, {
    titleButton: 'Draft',
    faIcon: faShareAlt,
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
