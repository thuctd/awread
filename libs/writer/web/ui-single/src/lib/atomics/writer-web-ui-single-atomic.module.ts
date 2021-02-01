import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule, GlobalDesignSystemAtomicModule } from '@awread/global/design-system';
import { EditprofileFormMolec } from './molecs/editprofile-form/editprofile-form.molec';
import { InfoFormMolec } from './molecs/info-form/info-form.molec';
import { ChangepwFormMolec } from './molecs/changepw-form/changepw-form.molec';
import { FormProfieOrgan } from './organs/form-profie/form-profie.organ';
import { ImageProfileOrgan } from './organs/image-profile/image-profile.organ';
import { ChangePhotoMolec } from './molecs/change-photo/change-photo.molec';
import { ProfileTemplate } from './templates/profile/profile.template';

@NgModule({
  imports: [
    CommonModule,
    StorybookSupportModule,
    GlobalDesignSystemAtomicModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    EditprofileFormMolec,
    InfoFormMolec,
    ChangepwFormMolec,
    FormProfieOrgan,
    ImageProfileOrgan,
    ChangePhotoMolec,
    ProfileTemplate,
  ],
  declarations: [
    EditprofileFormMolec,
    InfoFormMolec,
    ChangepwFormMolec,
    FormProfieOrgan,
    ImageProfileOrgan,
    ChangePhotoMolec,
    ProfileTemplate,
  ],
})
export class WriterWebUiSingleAtomicModule { }
