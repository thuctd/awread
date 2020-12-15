import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninDesktopBannerSection } from './signin-desktop-banner.section';

describe('SigninDesktopBannerSection', () => {
  let component: SigninDesktopBannerSection;
  let fixture: ComponentFixture<SigninDesktopBannerSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninDesktopBannerSection ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninDesktopBannerSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
