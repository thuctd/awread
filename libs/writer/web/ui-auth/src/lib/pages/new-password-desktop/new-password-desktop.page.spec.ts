import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPasswordDesktopPage } from './new-password-desktop.page';

describe('NewPasswordDesktopPage', () => {
  let component: NewPasswordDesktopPage;
  let fixture: ComponentFixture<NewPasswordDesktopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPasswordDesktopPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPasswordDesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
