import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DetailMobilePage } from "./detail-mobile.page";

describe("DetailMobilePage", () => {
  let component: DetailMobilePage;
  let fixture: ComponentFixture<DetailMobilePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailMobilePage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMobilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
