import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule, GlobalDesignSystemAtomicModule } from '@awread/global/design-system';
import { WrtProfileImageOrgan } from './organs/wrt-profile-image/wrt-profile-image.organ';
import { WrtProfileChangePhotoMolec } from './molecs/wrt-profile-change-photo/wrt-profile-change-photo.molec';
import { WrtProfileTemplate } from './templates/wrt-profile/wrt-profile.template';
import { WriterWebSharedAtomicModule } from '@awread/writer/web/shared';

@NgModule({
  imports: [CommonModule, StorybookSupportModule, GlobalDesignSystemAtomicModule, ReactiveFormsModule, WriterWebSharedAtomicModule],
  exports: [CommonModule, WrtProfileImageOrgan, WrtProfileChangePhotoMolec, WrtProfileTemplate],
  declarations: [WrtProfileImageOrgan, WrtProfileChangePhotoMolec, WrtProfileTemplate],
})
export class WriterWebUiSingleAtomicModule {}
