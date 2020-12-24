import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class LoginRegisterPage {
    mode;
    constructor(
        private activatedRoute: ActivatedRoute
    ) { }

    ngOnInit() {
        console.log('mode la Login hay register, thi minh load html template tuong ung', this.activatedRoute.snapshot.data);
        this.mode = this.activatedRoute.snapshot.data;
    }

}
