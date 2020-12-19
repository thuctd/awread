import { AuthApi } from "./../apis/auth.api";
import { Injectable } from "@angular/core";
import { FirebaseAuthAddon, FirebaseAuthSocialAddon } from "../addons";
import { BasicCredential, ProviderType } from "../models";
import firebase from "firebase/app";
// userCredential.additionalUserInfo.isNewUser;
// userCredential.credential.providerId;
// userCredential.user.getIdToken();
@Injectable({ providedIn: "root" })
export class RegisterGear {
  userCredential: firebase.auth.UserCredential | null = null;
  constructor(
    private firebaseAuthAddon: FirebaseAuthAddon,
    private firebaseAuthSocialAddon: FirebaseAuthSocialAddon,
    private authApi: AuthApi
  ) {}

  async registerEmail(credential: BasicCredential) {
    try {
      const userCredential = await this.firebaseAuthAddon.registerWithEmail(
        credential
      );
      const user = {
        ...userCredential.user,
        displayName: credential.displayName,
        password: credential.password,
        provider: "email/password",
      };
      this.firebaseAuthSocialAddon.createAccountOnServer(user);
    } catch (err) {
      console.log("login with email/pw error: ", err);
      if (err.code === "auth/email-already-in-use") {
        // TH tạo email đã tồn tại, thì link email này tới provider google hoặc facebook đã tạo trước đó
        // Link xong là có thể đăng nhập với email/pass vừa mới link
        this.firebaseAuthSocialAddon.linkToProviderGoogleorFacebook(credential);
      }
    }
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
