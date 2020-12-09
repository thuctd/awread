import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninDesktopSection } from './signin-desktop.section';

describe('SigninDesktopSection', () => {
  let component: SigninDesktopSection;
  let fixture: ComponentFixture<SigninDesktopSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninDesktopSection ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninDesktopSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
