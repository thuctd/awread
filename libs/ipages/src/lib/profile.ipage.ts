import { ChangeDetectorRef, Directive, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { GenresFacade } from '@awread/core/genres';
import { AuthFacade, CurrentUserFacade } from '@awread/core/users';
import { PopupChangeCoverOrgan } from '@awread/global/design-system';
import { SnackbarService } from '@awread/global/packages';
@Injectable({
  providedIn: 'root',
})
@Directive()
export class ProfileIPage implements OnInit {
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
    avatar: [false]
  });

  currentUser$ = this.currentUserFacade.currentUser$;
  genres$ = this.genresFacade.genres$;
  constructor(
    private currentUserFacade: CurrentUserFacade,
    private fb: FormBuilder,
    private matDialog: MatDialog,
    private authFacade: AuthFacade,
    private cd: ChangeDetectorRef,
    private snackbarService: SnackbarService,
    private genresFacade: GenresFacade,
  ) { }

  ngOnInit(): void {
    this.genresFacade.getAllGenres().subscribe();
    this.getCurrentUser();
  }

  submitEvent(event) {
    switch (event) {
      case 'save-user':
        this.saveUser();
        break;
      case 'save-personal':
        this.saveUser();
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
          this.currentUserFacade.updateUser({ avatar: true, updatedAt: now });
          this.requireForm.patchValue({ avatar: true, updatedAt: now });
          this.cd.detectChanges();
        }, 1000);
      }
    });
  }

  saveUser() {
    if (this.requireForm.invalid) {
      this.requireForm.get('name').setValue(this.requireForm.value.name, { emitEvent: true });
      this.requireForm.get('email').setValue(this.requireForm.value.email, { emitEvent: true });
      this.requireForm.markAllAsTouched();
      return this.snackbarService.showWarning('Vui lòng điền đủ thông tin');
    } else {
      this.currentUserFacade.updateUser(this.requireForm.value);
      this.currentUserFacade.updatePersonal(this.requireForm.value);
    }
  }

  savePersonal() {
    this.currentUserFacade.updatePersonal({
      ...this.experienceForm.value,
      ...this.optionalForm.value
    });
  }

  private updateForm(user) {
    this.requireForm.patchValue({
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
  }
  private getCurrentUser() {
    this.currentUserFacade.getCurrentUser().subscribe((user) => {
      if (user) {
        this.updateForm(user);
      }
    });
  }

}
