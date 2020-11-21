import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPart } from './footer.part';

describe('FooterPart', () => {
  let component: FooterPart;
  let fixture: ComponentFixture<FooterPart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPart ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
