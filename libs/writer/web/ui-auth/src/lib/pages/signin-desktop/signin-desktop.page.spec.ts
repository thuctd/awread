import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninDesktopPage } from './signin-desktop.page';

describe('SigninDesktopPage', () => {
  let component: SigninDesktopPage;
  let fixture: ComponentFixture<SigninDesktopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SigninDesktopPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninDesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
