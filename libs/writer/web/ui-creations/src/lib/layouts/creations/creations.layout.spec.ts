import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationsLayout } from './creations.layout';

describe('CreationsLayout', () => {
  let component: CreationsLayout;
  let fixture: ComponentFixture<CreationsLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreationsLayout],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationsLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
