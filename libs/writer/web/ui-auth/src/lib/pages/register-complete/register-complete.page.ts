import { retry, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Directive, Injectable, OnInit } from '@angular/core';
import { AuthFacade } from '@awread/writer/web/feature-auth';
import { of } from 'rxjs';
import { SnackbarsService } from '@awread/global/packages';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class RegisterCompletePage implements OnInit {
  formComplete: FormGroup;
  user: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private authFacade: AuthFacade,
    private router: Router,
    private snackbarService: SnackbarsService
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.updateForm();
  }

  completeRegister() {
    this.authFacade.updateUser(this.formComplete.value);
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
