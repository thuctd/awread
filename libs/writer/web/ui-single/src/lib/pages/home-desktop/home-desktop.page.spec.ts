import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDesktopPage } from './home-desktop.page';

describe('HomeDesktopPage', () => {
  let component: HomeDesktopPage;
  let fixture: ComponentFixture<HomeDesktopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeDesktopPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
