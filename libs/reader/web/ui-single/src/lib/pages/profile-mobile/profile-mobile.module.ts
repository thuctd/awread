import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileMobileRoutingModule } from './profile-mobile-routing.module';
import { ProfileMobilePage } from './profile-mobile.page';
import { ReaderWebUiSingleAtomicModule } from '../../atomics/reader-web-ui-single-atomic.module';
import { CoreUsersModule } from '@awread/core/users';

@NgModule({
  declarations: [ProfileMobilePage],
  imports: [CommonModule, ProfileMobileRoutingModule, ReaderWebUiSingleAtomicModule, CoreUsersModule],
})
export class ProfileMobileModule {}
