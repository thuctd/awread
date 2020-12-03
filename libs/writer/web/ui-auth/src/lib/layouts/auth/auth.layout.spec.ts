import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLayout } from './auth.layout';

describe('AuthLayout', () => {
  let component: AuthLayout;
  let fixture: ComponentFixture<AuthLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AuthLayout],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
