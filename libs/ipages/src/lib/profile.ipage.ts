import { ChangeDetectorRef, Directive, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthFacade, CurrentUserFacade } from '@awread/core/users';
import { PopupChangeCoverOrgan } from '@awread/global/design-system';
import { SnackbarService } from '@awread/global/packages';
@Injectable({
  providedIn: 'root',
})
@Directive()
export class ProfileIPage implements OnInit {
  profileForm: FormGroup;
  currentUser$ = this.currentUserFacade.currentUser$;
  profileFormValueBefore = '';
  submitted = false;
  constructor(
    private currentUserFacade: CurrentUserFacade,
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private authFacade: AuthFacade,
    private cd: ChangeDetectorRef,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getCurrentUser();
  }

  submitEvent(event) {
    switch (event) {
      case 'save-form':
        this.updateProfile();
        break;
      case 'change-image':
        this.openChangeCover();
        break;
      case 'google':
        this.linkSocialEvent(event);
        break;
      case 'facebook':
        this.linkSocialEvent(event);
        break;

      default:
        console.log('submit', event);
        break;
    }
  }

  linkSocialEvent(event) {
    this.authFacade.linkSocial(event);
  }

  openChangeCover() {
    const dialogRef = this.matDialog.open(PopupChangeCoverOrgan, {
      width: '55rem',
      height: '33rem',
      data: {
        id: this.currentUserFacade.getUserId(),
        mode: 'avatar',
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result?.success) {
        setTimeout(() => {
          // wait 1s for server ready
          const now = new Date();
          this.currentUserFacade.updateCurrentUser({ avatar: true, updatedAt: now });
          this.profileForm.patchValue({ updatedAt: now });
          this.cd.detectChanges();
        }, 1000);
      }
    });
  }

  updateProfile() {
    if (this.profileForm.invalid) {
      this.profileForm.get('name').setValue(this.profileForm.value.name, { emitEvent: true });
      this.profileForm.get('email').setValue(this.profileForm.value.email, { emitEvent: true });
      this.profileForm.markAllAsTouched();
      return this.snackbarService.showWarning('Vui lòng điền đủ thông tin');
    } else {
      this.currentUserFacade.updateCurrentUser(this.profileForm.value);
    }
  }

  private updateProfileForm(user) {
    this.profileForm.patchValue({
      userId: user.userId,
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
      updatedAt: user.updatedAt,
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
      userId: [null],
      username: [null],
      email: [null, [Validators.required, Validators.email]],
      phone: [null],
      name: [null, [Validators.required]],
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
      updatedAt: [null],
    });
    setTimeout(() => {
      this.profileForm.get('dob').disable();
    }, 100);
  }
}
