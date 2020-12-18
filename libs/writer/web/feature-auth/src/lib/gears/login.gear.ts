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

  loginNormal(user) {
    this.authApi.signin(user);
  }

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
      console.log("userCredential", userCredential);
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
    try {
      const userCredential: firebase.auth.UserCredential = await this.firebaseAuthSocialAddon.loginWithProvider(
        providerType
      );
      console.log("userCredential", userCredential);
    } catch (err) {
      console.log("err", err);
      if (
        err.email &&
        err.credential &&
        err.code === "auth/account-exists-with-different-credential"
      ) {
        const providers = await firebase
          .auth()
          .fetchSignInMethodsForEmail(err.email);
        console.log("providers", providers);
        // const firstPopupProviderMethod = providers.find(p => supportedPopupSignInMethods.includes(p));

        // // Test: Could this happen with email link then trying social provider?
        // if (!firstPopupProviderMethod) {
        //   throw new Error(`Your account is linked to a provider that isn't supported.`);
        // }

        // const linkedProvider = getProvider(firstPopupProviderMethod);
        // linkedProvider.setCustomParameters({ login_hint: err.email });

        // const result = await firebase.auth().signInWithPopup(linkedProvider);
        // result.user.linkWithCredential(err.credential);
      }
    }
    // this.getCurrentUser();
  }

  getCurrentUser() {
    this.authApi.getAllBooks();
    return this.authApi.getCurrentUser();
  }
}
