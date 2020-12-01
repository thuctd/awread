import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormSection } from './login-form.section';

describe('LoginFormSection', () => {
  let component: LoginFormSection;
  let fixture: ComponentFixture<LoginFormSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginFormSection ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
