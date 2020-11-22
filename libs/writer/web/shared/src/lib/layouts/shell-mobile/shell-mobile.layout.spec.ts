import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShellMobileLayout } from './shell-mobile.layout';

describe('ShellMobileLayout', () => {
  let component: ShellMobileLayout;
  let fixture: ComponentFixture<ShellMobileLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShellMobileLayout ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellMobileLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
