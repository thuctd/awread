import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingMobilePage } from './writing-mobile.page';

describe('WritingMobilePage', () => {
  let component: WritingMobilePage;
  let fixture: ComponentFixture<WritingMobilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WritingMobilePage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
