import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopNavSection } from './top-nav.section';

describe('TopNavSection', () => {
  let component: TopNavSection;
  let fixture: ComponentFixture<TopNavSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopNavSection ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopNavSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
