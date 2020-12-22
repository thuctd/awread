import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCompleteMobilePage } from './register-complete-mobile.page';

describe('RegisterCompleteMobilePage', () => {
  let component: RegisterCompleteMobilePage;
  let fixture: ComponentFixture<RegisterCompleteMobilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCompleteMobilePage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterCompleteMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
