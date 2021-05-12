import { Directive, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrentUserFacade } from '@awread/writer/web/feature-auth';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class ProfilePage implements OnInit {
  profileForm: FormGroup;
  currentUser$ = this.currentUserFacade.currentUser$;
  profileFormValueBefore = '';
  submitted = false;
  constructor(
    private currentUserFacade: CurrentUserFacade,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getCurrentUser();
  }

  updateProfile() {
    this.submitted = true;
    if (this.profileForm.invalid) {
      return;
    }

    const { fullname } = this.profileForm.value;
    if (!fullname.trim()) {
      alert('Tên không được để trống');
      return;
    }
    const shouldUpdateProfile =
      JSON.stringify(this.profileFormValueBefore) !==
      JSON.stringify(this.profileForm.value);
    if (shouldUpdateProfile) {
      const user = {
        ...this.profileForm.value,
        userid: this.currentUserFacade.getUserId(),
      };
      this.currentUserFacade.updateCurrentUser(user)
    }
  }

  private updateProfileForm(user) {
    this.profileForm.patchValue({
      fullname: user.fullname ?? '',
      username: user.username ?? '',
      website: user.website ?? '',
      introduce: user.introduce ?? '',
      email: user.email ?? '',
      phone: user.phone ?? '',
      dob: user.dob ?? '',
      gender: user.gender ?? '',
    });
    this.profileFormValueBefore = this.profileForm.value;
  }
  private getCurrentUser() {
    this.currentUserFacade.getCurrentUser()
    //   .subscribe((user) => {
    //   if (user && user.length) {
    //     this.updateProfileForm(user[0]);
    //   }
    // });
  }

  private initForm() {
    this.profileForm = this.fb.group({
      fullname: ['', Validators.required],
      username: [''],
      website: [''],
      introduce: [''],
      email: ['', [Validators.email]],
      phone: [''],
      dob: [''],
      gender: [''],
      photoUrl: [''],
    });
  }
}
