import { ComponentFixture, TestBed } from "@angular/core/testing";

import { CreationLayout } from "./creation.layout";

describe("CreationLayout", () => {
  let component: CreationLayout;
  let fixture: ComponentFixture<CreationLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreationLayout],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
