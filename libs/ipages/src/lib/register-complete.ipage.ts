import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Directive, Injectable, OnInit } from '@angular/core';
import { AuthFacade, CurrentUserFacade } from '@awread/core/users';

@Injectable({
    providedIn: 'root',
})
@Directive()
export class RegisterCompleteIpage implements OnInit {
    formComplete: FormGroup;
    constructor(
        private fb: FormBuilder,
        private authFacade: AuthFacade,
        private currentUserFacade: CurrentUserFacade,
    ) { }

    ngOnInit(): void {
        this.initForm();
        this.updateForm();
    }

    completeRegister() {
        this.currentUserFacade.updateName(this.formComplete.value);
    }

    linkSocialEvent(event) {
        this.authFacade.linkSocial(event);
    }

    private updateForm() {

    }

    private initForm() {
        this.formComplete = this.fb.group({
            lastname: ['', []],
            middlename: ['', []],
            firstname: ['', []],
        });
    }
}
