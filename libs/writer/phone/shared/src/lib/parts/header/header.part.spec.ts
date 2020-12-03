import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPart } from './header.part';

describe('HeaderPart', () => {
  let component: HeaderPart;
  let fixture: ComponentFixture<HeaderPart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderPart],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
