import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMobilePage } from './list-mobile.page';

describe('ListMobilePage', () => {
  let component: ListMobilePage;
  let fixture: ComponentFixture<ListMobilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListMobilePage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
