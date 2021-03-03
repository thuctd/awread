import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule, GlobalDesignSystemAtomicModule } from '@awread/global/design-system';
import { WrtProfileEditFormMolec } from './molecs/wrt-profile-edit-form/wrt-profile-edit-form.molec';
import { WrtProfileInfoFormMolec } from './molecs/wrt-profile-info-form/wrt-profile-info-form.molec';
import { WrtProfileChangepwFormMolec } from './molecs/wrt-profile-changepw-form/wrt-profile-changepw-form.molec';
import { WrtProfileFormOrgan } from './organs/wrt-profile-form/wrt-profile-form.organ';
import { WrtProfileImageOrgan } from './organs/wrt-profile-image/wrt-profile-image.organ';
import { WrtProfileChangePhotoMolec } from './molecs/wrt-profile-change-photo/wrt-profile-change-photo.molec';
import { WrtProfileTemplate } from './templates/wrt-profile/wrt-profile.template';
import { WriterWebSharedAtomicModule } from '@awread/writer/web/shared';
import { WrtProfileChangeCoverTemplate } from './templates/wrt-profile-change-cover/wrt-profile-change-cover.template';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [
    CommonModule,
    StorybookSupportModule,
    GlobalDesignSystemAtomicModule,
    ReactiveFormsModule,
    WriterWebSharedAtomicModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  exports: [
    CommonModule,
    WrtProfileEditFormMolec,
    WrtProfileInfoFormMolec,
    WrtProfileChangepwFormMolec,
    WrtProfileFormOrgan,
    WrtProfileImageOrgan,
    WrtProfileChangePhotoMolec,
    WrtProfileTemplate,
    WrtProfileChangeCoverTemplate,
  ],
  declarations: [
    WrtProfileEditFormMolec,
    WrtProfileInfoFormMolec,
    WrtProfileChangepwFormMolec,
    WrtProfileFormOrgan,
    WrtProfileImageOrgan,
    WrtProfileChangePhotoMolec,
    WrtProfileTemplate,
    WrtProfileChangeCoverTemplate,
  ],
})
export class WriterWebUiSingleAtomicModule {}
