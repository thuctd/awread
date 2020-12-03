import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDesktopPage } from './list-desktop.page';

describe('ListDesktopPage', () => {
  let component: ListDesktopPage;
  let fixture: ComponentFixture<ListDesktopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListDesktopPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
