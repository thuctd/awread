import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftNavSection } from './left-nav.section';

describe('LeftNavSection', () => {
  let component: LeftNavSection;
  let fixture: ComponentFixture<LeftNavSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftNavSection ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftNavSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
