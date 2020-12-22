import { Directive, Injectable, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { AuthFacade } from "libs/writer/web/feature-auth/src/lib/facades/auth.facade";

@Injectable({
  providedIn: "root",
})
@Directive()
export class LoginRegisterPage implements OnInit {
  registerForm: FormGroup;
  user;
  constructor(
    public fb: FormBuilder,
    public authFacade: AuthFacade,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      email: [""],
      password: [""],
    });

    this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params);
      this.user = JSON.parse(params.get("user"));
      console.log("user", this.user);
      this.registerForm.patchValue({
        email: this.user.email
          ? this.user.email
          : this.user.providerData[0]?.email,
      });
    });
  }
  loginWithEmailPassword() {
    const formValue = this.registerForm.value;
    const user = { ...this.user, ...formValue, provider: "signin/social" };
    console.log("formValue", formValue);
    this.authFacade.loginNormal(user);
  }
}
