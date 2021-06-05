import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDesktopRoutingModule } from './profile-desktop-routing.module';
import { ProfileDesktopPage } from './profile-desktop.page';
import { ReaderWebUiSingleAtomicModule } from '../../atomics/reader-web-ui-single-atomic.module';
import { CoreUsersModule } from '@awread/core/users';

@NgModule({
  declarations: [ProfileDesktopPage],
  imports: [CommonModule, ProfileDesktopRoutingModule, ReaderWebUiSingleAtomicModule, CoreUsersModule],
})
export class ProfileDesktopModule { }
