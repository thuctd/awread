import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellDesktopLayout } from './shell-desktop.layout';

describe('ShellDesktopLayout', () => {
  let component: ShellDesktopLayout;
  let fixture: ComponentFixture<ShellDesktopLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellDesktopLayout ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellDesktopLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
