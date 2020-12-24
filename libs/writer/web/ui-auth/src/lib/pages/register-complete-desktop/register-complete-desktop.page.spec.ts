import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCompleteDesktopPage } from './register-complete-desktop.page';

describe('RegisterCompleteDesktopPage', () => {
  let component: RegisterCompleteDesktopPage;
  let fixture: ComponentFixture<RegisterCompleteDesktopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCompleteDesktopPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCompleteDesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
