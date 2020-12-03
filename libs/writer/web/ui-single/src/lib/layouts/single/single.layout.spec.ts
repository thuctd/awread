import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleLayout } from './single.layout';

describe('SingleLayout', () => {
  let component: SingleLayout;
  let fixture: ComponentFixture<SingleLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SingleLayout],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
