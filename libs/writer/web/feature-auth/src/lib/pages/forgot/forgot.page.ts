import { Directive, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class ForgotPage {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {}
}
