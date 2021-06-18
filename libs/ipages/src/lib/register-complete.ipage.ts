import { FormBuilder, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Directive, Injectable, OnInit } from '@angular/core';
import { AuthFacade, CurrentUserFacade } from '@awread/core/users';
import { GenresFacade } from '@awread/core/genres';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class RegisterCompleteIpage implements OnInit {
  formComplete: FormGroup;
  genres$ = this.genresFacade.genres$;
  experienceForm = this.fb.group({
    age: ['2'],
    genreIds: [[]],
  });

  optionalForm = this.fb.group({
    firstname: [''],
    middlename: [''],
    lastname: [''],
    facebook: [''],
    google: [''],
    apple: [''],
  });

  requireForm = this.fb.group({
    username: ['', [Validators.required]],
    name: ['', [Validators.required]],
    email: ['', []],
    phone: ['', []],
    password: ['', [Validators.required, Validators.minLength(4)]],
    confirmpassword: ['', [Validators.required, Validators.minLength(4)]],
  },
    { validator: this.passwordMatchValidator }
  );

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade,
    private genresFacade: GenresFacade,
    private currentUserFacade: CurrentUserFacade
  ) { }

  ngOnInit(): void {
    this.genresFacade.getAllGenres().subscribe();
    this.updateForm();
  }
  passwordMatchValidator(g) {
    return g.get('password').value === g.get('confirmpassword').value ? null : { missmatch: true };
  }

  private updateForm() {
    const socialCredential = this.currentUserFacade.getRegisterCredential();
    console.log('socialCredential', socialCredential);
    if (socialCredential) {
      const socialUser = socialCredential.socialUser;
      this.requireForm.patchValue({
        name: socialUser.name,
        email: socialUser.email,
      });
      this.optionalForm.patchValue({
        firstname: socialUser.firstName ?? '',
        lastname: socialUser.lastName ?? '',
        [socialCredential.provider]: socialCredential.providerId,
      });
    }
    this.currentUserFacade.setSocialCredential();
    this.currentUserFacade.reset();
  }

  async linkSocialEvent(provider: 'facebook' | 'google' | 'apple') {
    // console.log('provider: ', provider);
    const credential = await this.authFacade.connectSocialNewAccount(provider);
    if (credential.providerId) {
      const socialUser = credential.socialUser;
      this.optionalForm.patchValue({
        firstname: socialUser.firstName ?? '',
        lastname: socialUser.lastName ?? '',
        [credential.provider]: credential.providerId,
      }, { emitEvent: true });
      this.optionalForm.updateValueAndValidity();
      // console.log('after update: ', this.optionalForm.value);
    }
    return;
  }

  completeEvent() {
    console.log('complete', this.requireForm.value, this.optionalForm.value, this.experienceForm.value);
    this.authFacade.createNewAccount(this.requireForm.value, this.optionalForm.value, this.experienceForm.value);
  }
}
