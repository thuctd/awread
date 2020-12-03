import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupDesktopPage } from './signup-desktop.page';

describe('SignupDesktopPage', () => {
  let component: SignupDesktopPage;
  let fixture: ComponentFixture<SignupDesktopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SignupDesktopPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupDesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
