import { Directive, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CurrentUserFacade } from '@awread/writer/web/feature-auth';

@Injectable({
  providedIn: 'root',
})
@Directive()
export class ProfilePage implements OnInit {
  profileForm: FormGroup;
  currentUser$ = this.currentUserFacade.currentUser$;
  constructor(
    private currentUserFacade: CurrentUserFacade,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getCurrentUser();
  }

  updateProfile() {
    const user = {
      ...this.profileForm.value,
      userid: this.currentUserFacade.getUserId(),
    };
    this.currentUserFacade
      .updateCurrentUser(user)
      .subscribe((res) => console.log('update cureent user result: ', res));
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
  }
  private getCurrentUser() {
    this.currentUserFacade.getCurrentUser().subscribe((user) => {
      if (user && user.length) {
        this.updateProfileForm(user[0]);
      }
    });
  }

  private initForm() {
    this.profileForm = this.fb.group({
      fullname: [''],
      username: [''],
      website: [''],
      introduce: [''],
      email: [''],
      phone: [''],
      dob: [''],
      gender: [''],
    });
  }
}
