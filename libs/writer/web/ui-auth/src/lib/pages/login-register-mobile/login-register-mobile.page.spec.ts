import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginRegisterMobilePage } from './login-register-mobile.page';

describe('LoginRegisterMobilePage', () => {
  let component: LoginRegisterMobilePage;
  let fixture: ComponentFixture<LoginRegisterMobilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginRegisterMobilePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginRegisterMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
