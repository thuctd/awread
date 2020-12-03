import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotMobilePage } from './forgot-mobile.page';

describe('ForgotMobilePage', () => {
  let component: ForgotMobilePage;
  let fixture: ComponentFixture<ForgotMobilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForgotMobilePage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
