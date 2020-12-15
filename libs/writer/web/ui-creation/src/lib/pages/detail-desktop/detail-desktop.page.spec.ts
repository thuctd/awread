import { ComponentFixture, TestBed } from "@angular/core/testing";

import { DetailDesktopPage } from "./detail-desktop.page";

describe("DetailDesktopPage", () => {
  let component: DetailDesktopPage;
  let fixture: ComponentFixture<DetailDesktopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailDesktopPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDesktopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
