import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPasswordMobilePage } from './new-password-mobile.page';

describe('NewPasswordMobilePage', () => {
  let component: NewPasswordMobilePage;
  let fixture: ComponentFixture<NewPasswordMobilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPasswordMobilePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPasswordMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
