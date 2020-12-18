import { AuthApi } from "./../apis/auth.api";
import { Injectable } from "@angular/core";
import firebase from "firebase/app";
import "firebase/auth";
import { ProviderType } from "../models";
import { FirebaseAuthAddon } from "./firebase-auth.addon";

@Injectable({ providedIn: "root" })
export class FirebaseAuthSocialAddon {
  supportedPopupSignInMethods = [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ];
  constructor(
    private firebaseAuthAddon: FirebaseAuthAddon,
    private authApi: AuthApi
  ) {}

  async registerWithEmail(credential) {
    try {
      const userCredential = await this.firebaseAuthAddon.registerWithEmail(
        credential
      );
      const user = {
        ...userCredential.user,
        displayName: credential.displayName,
        password: credential.password,
      };
      this.createAccountOnServer(user);
    } catch (err) {
      console.log("login with email/pw error: ", err);
      if (err.code === "auth/email-already-in-use") {
        // TH tạo email đã tồn tại, thì link email này tới provider google hoặc facebook đã tạo trước đó
        // Link xong là có thể đăng nhập với email/pass vừa mới link
        this.linkToProviderGoogleorFacebook(credential);
      }
    }
  }

  private async linkToProviderGoogleorFacebook(user) {
    try {
      const credential = firebase.auth.EmailAuthProvider.credential(
        user.email,
        user.password
      );
      const providers = await firebase
        .auth()
        .fetchSignInMethodsForEmail(user.email);
      const linkedProvider = this.getProvider(providers[0]);
      linkedProvider.setCustomParameters({ login_hint: user.email });
      const result = await firebase.auth().signInWithPopup(linkedProvider);
      result.user.linkWithCredential(credential);
    } catch (error) {
      console.log("link with gg/fb error: ", error);
    }
  }

  async loginWithProvider(providerType: ProviderType) {
    switch (providerType) {
      case ProviderType.apple:
        return await this.firebaseAuthAddon.loginWithApple();
      case ProviderType.facebook:
        try {
          const userCredential = await this.firebaseAuthAddon.loginWithFacebook();
          this.createAccountOnServer({
            ...userCredential.user,
            provider: "facebook",
          });
        } catch (err) {
          this.linkWithProviderFacebook(err);
        }
        break;
      case ProviderType.google:
        try {
          const userCredential = await this.firebaseAuthAddon.loginWithGoogle();
          this.createAccountOnServer({
            ...userCredential.user,
            provider: "google",
          });
          // vì google ghi đè lên tất cả tài khoản cùng email đã tạo trước đó,
          // nên phải check lại TH đã tạo email/password trước đó rồi mà bị ghì đè,
          // nếu đúng thì link lại với account google
          this.shouldLinkProviderPassword(
            userCredential.user.email,
            firebase.auth().currentUser
          );
          return userCredential;
        } catch (err) {
          // this.linkAccount(err);
          console.log("google login error: ", err);
        }
        break;
      default:
        return null;
    }
  }

  private shouldLinkProviderPassword(
    email: string,
    currentUser: firebase.User
  ) {
    return this.authApi.getUserBaseEmail(email).subscribe(async (res) => {
      console.log("curent user logged", res);
      if (
        res.data &&
        res.data["getUserBaseEmail"] &&
        res.data["getUserBaseEmail"]["results"].length
      ) {
        const user = res.data["getUserBaseEmail"]["results"][0];
        if (user.provider === "email/password") {
          const credential = firebase.auth.EmailAuthProvider.credential(
            user.email,
            user.password
          );
          try {
            const link = await currentUser.linkWithCredential(credential);
            console.log("Account linking success", link);
          } catch (error) {
            console.log("Account linking error", error);
          }
        }
      }
    });
  }

  private createAccountOnServer(user: any) {
    // send data to server
    this.authApi.createNewUser(user).subscribe((status) => {
      console.log("status new user", status);
      // this.actionAfterCreateAccountSuccess();
    });
  }

  private async linkWithProviderFacebook(err) {
    if (
      err.email &&
      err.credential &&
      err.code === "auth/account-exists-with-different-credential"
    ) {
      const providers = await firebase
        .auth()
        .fetchSignInMethodsForEmail(err.email);
      console.log("providers", providers);
      const firstPopupProviderMethod = providers.find((p) =>
        this.supportedPopupSignInMethods.includes(p)
      );
      // this.shouldLinkEmail(err.email);
      // Test: Could this happen with email link then trying social provider?
      // if (!firstPopupProviderMethod) {
      //   throw new Error(
      //     `Your account is linked to a provider that isn't supported.`
      //   );
      // }
      if (providers.includes("google.com")) {
        const linkedProvider: any = this.getProvider(firstPopupProviderMethod);
        linkedProvider.setCustomParameters({ login_hint: err.email });

        const result = await firebase.auth().signInWithPopup(linkedProvider);
        console.log("result", result);
        try {
          await result.user.linkWithCredential(err.credential);
          // check trường hợp google/facebook ghi đè account thì phải link lại provider password (account email/pw)
          this.shouldLinkProviderPassword(result.user.email, result.user);
        } catch (error) {}
      } else {
        // là provider email/password
        this.linkToProviderPassword(err);
      }
    }

    // Handle errors...
    // toast.error(err.message || err.toString());
  }

  private linkToProviderPassword(err) {
    return this.authApi.getUserBaseEmail(err.email).subscribe(async (res) => {
      console.log("curent user logged", res);
      if (
        res.data &&
        res.data["getUserBaseEmail"] &&
        res.data["getUserBaseEmail"]["results"].length
      ) {
        const user = res.data["getUserBaseEmail"]["results"][0];
        if (user.provider === "email/password") {
          try {
            const usercred = await firebase
              .auth()
              .signInWithEmailAndPassword(user.email, user.password);
            const link = await usercred.user.linkWithCredential(err.credential);
            console.log("Account linking success", link);
          } catch (error) {
            console.log("Account linking error", error);
          }
        }
      }
    });
  }

  private getProvider(providerId) {
    switch (providerId) {
      case firebase.auth.GoogleAuthProvider.PROVIDER_ID:
        return new firebase.auth.GoogleAuthProvider();
      case firebase.auth.FacebookAuthProvider.PROVIDER_ID:
        return new firebase.auth.FacebookAuthProvider();
      // case firebase.auth.EmailAuthProvider.PROVIDER_ID:
      //   return new firebase.auth.EmailAuthProvider();
      default:
        throw new Error(`No provider implemented for ${providerId}`);
    }
  }
}
