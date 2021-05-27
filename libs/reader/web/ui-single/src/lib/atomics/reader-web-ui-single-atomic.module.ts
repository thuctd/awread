import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorybookSupportModule, GlobalDesignSystemAtomicModule } from '@awread/global/design-system';
import { ReaderWebUiAuthorAtomicModule } from '@awread/reader/web/ui-author';
import { RdSettingOrgan } from './organs/rd-setting/rd-setting.organ';
import { RdProfileInfoPersonalMolec } from './molecs/rd-profile-info-personal/rd-profile-info-personal.molec';
import { RdProfileTabTemplateTemplate } from './templates/rd-profile-tab-template/rd-profile-tab-template.template';
import { RdSettingTabTemplateTemplate } from './templates/rd-setting-tab-template/rd-setting-tab-template.template';
@NgModule({
  imports: [CommonModule, StorybookSupportModule, GlobalDesignSystemAtomicModule, ReaderWebUiAuthorAtomicModule],
  exports: [CommonModule, RdSettingOrgan, RdProfileInfoPersonalMolec, RdProfileTabTemplateTemplate, RdSettingTabTemplateTemplate],
  declarations: [RdSettingOrgan, RdProfileInfoPersonalMolec, RdProfileTabTemplateTemplate, RdSettingTabTemplateTemplate],
})
export class ReaderWebUiSingleAtomicModule {}
