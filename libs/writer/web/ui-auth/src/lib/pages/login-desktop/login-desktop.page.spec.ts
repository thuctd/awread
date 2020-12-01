import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDesktopPage } from './login-desktop.page';

describe('LoginDesktopPage', () => {
  let component: LoginDesktopPage;
  let fixture: ComponentFixture<LoginDesktopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginDesktopPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginDesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
