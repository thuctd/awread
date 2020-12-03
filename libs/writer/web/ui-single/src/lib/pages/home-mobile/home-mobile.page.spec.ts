import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMobilePage } from './home-mobile.page';

describe('HomeMobilePage', () => {
  let component: HomeMobilePage;
  let fixture: ComponentFixture<HomeMobilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeMobilePage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
