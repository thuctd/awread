import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingMobilePage } from './setting-mobile.page';

describe('SettingMobilePage', () => {
  let component: SettingMobilePage;
  let fixture: ComponentFixture<SettingMobilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingMobilePage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
