import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { FirebaseAuthAddon, FirebaseAuthSocialAddon } from "../addons";
import { EmailLoginCredential, ProviderType } from "../models";
import firebase from "firebase/app";
import { AuthApi } from "../apis";

@Injectable({ providedIn: "root" })
export class LoginGear {
  constructor(
    private firebaseAuthAddon: FirebaseAuthAddon,
    private firebaseAuthSocialAddon: FirebaseAuthSocialAddon,
    private authApi: AuthApi,
    private router: Router
  ) {}

  loginWithRoleAdmin(credential: EmailLoginCredential) {
    this.loginEmail(credential)
      .then(async (res: any) => {
        console.log("user", res.user);
        this.authApi.setCustomClaimsToken(await res.user.getIdToken());
      })
      .catch((err) => console.log(err));
  }

  async loginEmail(credential: EmailLoginCredential) {
    try {
      const userCredential = await this.firebaseAuthAddon.loginWithEmail(
        credential
      );
      return userCredential;
    } catch (err) {
      console.log("err", err);
      if (err.code === "auth/user-not-found") {
        alert("Tài khoản không tồn tại!");
      } else if (err.code === "auth/wrong-password") {
        alert("Mật khẩu không chính xác!");
      }
    }
  }

  async loginSocial(providerType: ProviderType) {
    const userCredential: firebase.auth.UserCredential = await this.firebaseAuthSocialAddon.loginWithProvider(
      providerType
    );
    // this.getCurrentUser();
  }

  getCurrentUser() {
    this.authApi.getAllBooks();
    return this.authApi.getCurrentUser();
  }
}
