import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupMobilePage } from './signup-mobile.page';

describe('SignupMobilePage', () => {
  let component: SignupMobilePage;
  let fixture: ComponentFixture<SignupMobilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupMobilePage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
