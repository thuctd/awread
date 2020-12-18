import { Router } from "@angular/router";
import { AuthApi } from "./../apis/auth.api";
import { Injectable } from "@angular/core";
import { FirebaseAuthAddon, FirebaseAuthSocialAddon } from "../addons";
import { BasicCredential, ProviderType } from "../models";
import firebase from "firebase/app";
import { MatDialog } from "@angular/material/dialog";
// userCredential.additionalUserInfo.isNewUser;
// userCredential.credential.providerId;
// userCredential.user.getIdToken();

@Injectable({ providedIn: "root" })
export class RegisterGear {
  userCredential: firebase.auth.UserCredential | null = null;
  constructor(
    private firebaseAuthAddon: FirebaseAuthAddon,
    private firebaseAuthSocialAddon: FirebaseAuthSocialAddon,
    private authApi: AuthApi,
    private dialog: MatDialog,
    private router: Router
  ) {}

  async registerEmail(basicCredential: BasicCredential) {
    return this.firebaseAuthSocialAddon.registerWithEmail(basicCredential);
  }

  async registerSocial(providerType: ProviderType) {
    try {
      const userCredential = await this.firebaseAuthSocialAddon.loginWithProvider(
        providerType
      );
      console.log("userCredential", userCredential);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email đã tồn tại");
      }
    }

    this.routingToPersonalInfoPageIfSocial();
  }

  private routingToPersonalInfoPageIfSocial() {
    // routing to somewhere to enter email and password for social login
  }

  private actionAfterCreateAccountSuccess() {
    // routing to dashboard
  }
}

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "user-info",
  template: ` <div>Hello</div> `,
})
export class InfoUserComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
