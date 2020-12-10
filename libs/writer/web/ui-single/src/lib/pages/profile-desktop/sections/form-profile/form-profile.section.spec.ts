import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfileSection } from './form-profile.section';

describe('FormProfileSection', () => {
  let component: FormProfileSection;
  let fixture: ComponentFixture<FormProfileSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProfileSection ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProfileSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
