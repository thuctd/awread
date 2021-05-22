import { Directive, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CurrentUserFacade } from '@awread/core/users';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class ProfilePage implements OnInit {
  profileForm: FormGroup;
  currentUser$ = this.currentUserFacade.currentUser$;
  profileFormValueBefore = '';
  submitted = false;
  constructor(private currentUserFacade: CurrentUserFacade, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.initForm();
    this.getCurrentUser();
  }

  updateProfile() {
    this.currentUserFacade.updateCurrentUser(this.profileForm.value);
  }

  private updateProfileForm(user) {
    this.profileForm.patchValue({
      username: user.username,
      email: user.email,
      phone: user.phone,
      name: user.name,
      firstname: user.firstname,
      middlename: user.middlename,
      lastname: user.lastname,
      age: user.age,
      avatar: user.avatar,
      dob: user.dob,
      gender: user.gender,
      bio: user.bio,
      websiteAddress: user.websiteAddress,
      facebookAddress: user.facebookAddress,
    });

    this.profileFormValueBefore = this.profileForm.value;
  }

  private getCurrentUser() {
    this.currentUserFacade.getCurrentUser().subscribe((user) => {
      if (user) {
        this.updateProfileForm(user);
      }
    });
  }

  private initForm() {
    this.profileForm = this.fb.group({
      username: [null],
      email: [null],
      phone: [null],
      name: [null],
      firstname: [null],
      middlename: [null],
      lastname: [null],
      age: [null],
      avatar: [null],
      dob: [null],
      gender: [null],
      bio: [null],
      websiteAddress: [null],
      facebookAddress: [null],
    });
  }
}
