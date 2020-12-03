import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDesktopPage } from './profile-desktop.page';

describe('ProfileDesktopPage', () => {
  let component: ProfileDesktopPage;
  let fixture: ComponentFixture<ProfileDesktopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileDesktopPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
