import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageProfileSection } from './image-profile.section';

describe('ImageProfileSection', () => {
  let component: ImageProfileSection;
  let fixture: ComponentFixture<ImageProfileSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageProfileSection ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageProfileSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
