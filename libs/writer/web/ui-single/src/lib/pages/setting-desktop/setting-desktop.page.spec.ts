import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingDesktopPage } from './setting-desktop.page';

describe('SettingDesktopPage', () => {
  let component: SettingDesktopPage;
  let fixture: ComponentFixture<SettingDesktopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SettingDesktopPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingDesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
