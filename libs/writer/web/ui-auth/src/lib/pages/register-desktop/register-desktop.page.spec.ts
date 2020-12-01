import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDesktopPage } from './register-desktop.page';

describe('RegisterDesktopPage', () => {
  let component: RegisterDesktopPage;
  let fixture: ComponentFixture<RegisterDesktopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterDesktopPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
