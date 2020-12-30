import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedDesktopLayout } from './shared-desktop.layout';

describe('SharedDesktopLayout', () => {
  let component: SharedDesktopLayout;
  let fixture: ComponentFixture<SharedDesktopLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedDesktopLayout ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedDesktopLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
