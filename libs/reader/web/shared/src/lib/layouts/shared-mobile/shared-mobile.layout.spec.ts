import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedMobileLayout } from './shared-mobile.layout';

describe('SharedMobileLayout', () => {
  let component: SharedMobileLayout;
  let fixture: ComponentFixture<SharedMobileLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedMobileLayout],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedMobileLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
