import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresField } from './genres.field';

describe('GenresField', () => {
  let component: GenresField;
  let fixture: ComponentFixture<GenresField>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenresField ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresField);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
