import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMobilePage } from './register-mobile.page';

describe('RegisterMobilePage', () => {
  let component: RegisterMobilePage;
  let fixture: ComponentFixture<RegisterMobilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterMobilePage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
