import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'molec-test',
  templateUrl: './molec-test.molec.html',
  styleUrls: ['./molec-test.molec.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MolecTestMolec implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
