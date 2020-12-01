import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgotDesktopPage } from './forgot-desktop.page';

describe('ForgotDesktopPage', () => {
  let component: ForgotDesktopPage;
  let fixture: ComponentFixture<ForgotDesktopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgotDesktopPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgotDesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
