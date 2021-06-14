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

  linkSocialEvent(event) { }

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
  }

  async connectSocialNewAccount(provider: 'facebook' | 'google' | 'apple') {
    const credential = await this.authFacade.connectSocialNewAccount(provider);
    if (credential.providerId) {
      this.optionalForm.get(credential.provider).patchValue(credential.providerId);
    }
  }

  completeRegister() {
    this.authFacade.createNewAccount(this.requireForm, this.optionalForm, this.experienceForm);
  }
}
