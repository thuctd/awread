import { Directive, Injectable, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { AuthFacade } from "libs/writer/web/feature-auth/src/lib/facades/auth.facade";
import { ProviderType } from "libs/writer/web/feature-auth/src/lib/models";

@Injectable({
  providedIn: "root",
})
@Directive()
export class SigninPage implements OnInit {
  form: FormGroup;
  mode: "signin" | "signup" = "signin";
  template = {
    page: {
      signin: "Login",
      signup: "Sign up",
    },
    signin: {
      title: "Welcome Back",
      suggest: "New user?",
      changeButton: "Create an account",
      mainButton: "signin",
      socialButton: "signin",
    },
    signup: {
      title: "Create Account",
      suggest: "Already have an Account?",
      changeButton: "signin",
      mainButton: "Register Account",
      socialButton: "Continue",
    },
    forgotpassword: {
      changeButton: "Forgot your password ?",
    },
    rememberme: {
      title: "Remember Me",
    },
  };
  activeTemplate = this.template.signin;
  hasValueName: boolean;
  hasValueUs: boolean;
  hasValuePw: boolean;
  hasValueCfpw: boolean;
  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade // private loginForm: LoginForm, // private authFacade: AuthFacade
  ) {}

  ngOnInit(): void {
    this.form = this.generate();
  }

  generate() {
    return this.fb.group({
      fullname: [""],
      email: [""],
      password: [""],
      confirmPassword: [""],
    });
  }
  swapMode(event) {
    this.mode = this.mode === "signin" ? "signup" : "signin";
    this.updateText();
    this.changeDisable();
  }

  changeDisable() {
    const action = this.mode === "signin" ? "disable" : "enable";
    (this.form.get("displayName") as FormControl)[action]();
    (this.form.get("confirmPassword") as FormControl)[action]();
  }

  updateText() {
    this.activeTemplate = this.template[this.mode];
  }

  auth(provider: "email" | "facebook" | "google") {
    // debugger
    console.log(provider, this.form.value);
    if (this.mode === "signin") {
      // this.authFacade.signin(provider, this.form.value);
      switch (provider) {
        case "email":
          console.log("form value", this.form.value);
          this.authFacade.loginEmail(this.form.value);
          break;
        case "facebook":
          this.authFacade.registerSocial(ProviderType.facebook);
          break;
        case "google":
          this.authFacade.registerSocial(ProviderType.google);
          break;
        default:
          break;
      }
    } else {
      // this.authFacade.signup(provider, this.form.value)
      switch (provider) {
        case "email":
          this.authFacade.registerEmail(this.form.value);
          break;
        case "facebook":
          break;
        case "google":
          break;
        default:
          break;
      }
    }
  }

  currentUser$ = this.authFacade.currentUser$;
  logout() {
    this.authFacade.logout();
  }
}
