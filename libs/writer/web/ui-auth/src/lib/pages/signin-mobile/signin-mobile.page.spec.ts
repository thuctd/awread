import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninMobilePage } from './signin-mobile.page';

describe('SigninMobilePage', () => {
  let component: SigninMobilePage;
  let fixture: ComponentFixture<SigninMobilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninMobilePage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
