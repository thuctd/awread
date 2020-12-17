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

  async registerEmail(basicCredential: BasicCredential) {
    try {
      const userCredential = await this.firebaseAuthAddon.registerWithEmail(
        basicCredential
      );
      const user = {
        ...userCredential.user,
        displayName: basicCredential.fullname,
        password: basicCredential.password,
      };
      this.createAccountOnServer(user);
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email đã tồn tại");
      }
    }
  }

  async registerSocial(providerType: ProviderType) {
    try {
      const userCredential = await this.firebaseAuthSocialAddon.loginWithProvider(
        providerType
      );
      const user = {
        ...userCredential.user,
        password: "123456",
      };
      this.createAccountOnServer(user);
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

  createAccountOnServer(user: any) {
    // send data to server
    this.authApi.createNewUser(user).subscribe((mes) => {
      console.log("mes", mes);
      // this.actionAfterCreateAccountSuccess();
    });
  }

  private actionAfterCreateAccountSuccess() {
    // routing to dashboard
  }
}
