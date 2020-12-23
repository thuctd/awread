import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class ForgotPage {

    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
    }

}
