import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingDesktopPage } from './writing-desktop.page';

describe('WritingDesktopPage', () => {
  let component: WritingDesktopPage;
  let fixture: ComponentFixture<WritingDesktopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WritingDesktopPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingDesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
