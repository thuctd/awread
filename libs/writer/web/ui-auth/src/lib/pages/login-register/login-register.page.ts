import { AuthFacade } from "./../../../../../feature-auth/src/lib/facades/auth.facade";
import { Directive, Injectable, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
@Directive()
export abstract class LoginRegisterPage implements OnInit {
  registerForm: FormGroup;
  constructor(public fb: FormBuilder, public authFacade: AuthFacade) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: [""],
      password: [""],
    });
  }

  abstract loginWithEmailPassword();
  currentUser$ = this.authFacade.currentUser$;
}
