import { Directive, Injectable, OnInit } from "@angular/core";

@Injectable({
  providedIn: "root",
})
@Directive()
export class ShellLayout implements OnInit {
  ngOnInit(): void {}
}
