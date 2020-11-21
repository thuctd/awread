import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPart } from './navbar.part';

describe('NavbarPart', () => {
  let component: NavbarPart;
  let fixture: ComponentFixture<NavbarPart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarPart ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarPart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
