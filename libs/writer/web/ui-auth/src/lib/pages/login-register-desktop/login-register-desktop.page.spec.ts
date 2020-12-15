import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterDesktopPage } from './login-register-desktop.page';

describe('LoginRegisterDesktopPage', () => {
  let component: LoginRegisterDesktopPage;
  let fixture: ComponentFixture<LoginRegisterDesktopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegisterDesktopPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterDesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
