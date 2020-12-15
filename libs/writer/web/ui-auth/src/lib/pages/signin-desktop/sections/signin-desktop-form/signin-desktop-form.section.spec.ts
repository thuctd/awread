import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninDesktopFormSection } from './signin-desktop-form.section';

describe('SigninDesktopFormSection', () => {
  let component: SigninDesktopFormSection;
  let fixture: ComponentFixture<SigninDesktopFormSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninDesktopFormSection ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninDesktopFormSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
