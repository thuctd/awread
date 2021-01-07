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
    // this.profileForm.setValue({ username: 'ahihi' });
    this.profileForm.updateValueAndValidity();
    this.updateForm();
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

  private updateForm() {
    //TODO: ko goi o day
    this.currentUserFacade.getCurrentUser().subscribe((res) => {
      const user = res['data']['allGetCurrentUsers']['nodes'];
      console.log('update form with: ', user);
      if (user && user.length) {
        // this.profileForm.updateValueAndValidity();
        this.profileForm.patchValue(
          {
            fullname: user[0].fullname ?? 'cc',
            username: user[0].username ?? '',
            website: user[0].website ?? '',
            introduce: user[0].introduce ?? '',
            email: user[0].email ?? '',
            phone: user[0].phone ?? '',
            dob: user[0].dob ?? '',
            gender: user[0].gender ?? '',
          },
          { emitEvent: true, onlySelf: true }
        );
        // this.cd.detectChanges();
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
