import { Directive, Injectable, Optional } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AuthFacade, LoginRegisterIpage } from '@awread/core/users';
import { SnackbarsService } from '@awread/global/packages';

@Injectable({ providedIn: 'root' })
@Directive()
export class LoginRegisterPage extends LoginRegisterIpage {
    constructor(
        public dialogRef: MatDialogRef<LoginRegisterIpage>,
        public authFacade: AuthFacade,
        public activatedRoute: ActivatedRoute,
        public fb: FormBuilder,
        public snackbarService: SnackbarsService
    ) {
        super(authFacade, activatedRoute, fb, snackbarService)
    }

}