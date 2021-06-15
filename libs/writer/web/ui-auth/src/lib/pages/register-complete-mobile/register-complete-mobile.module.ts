import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterCompleteMobileRoutingModule } from './register-complete-mobile-routing.module';
import { RegisterCompleteMobilePage } from './register-complete-mobile.page';
import { WriterWebUiAuthAtomicModule } from '../../atomics/writer-web-ui-auth-atomic.module';

@NgModule({
  declarations: [RegisterCompleteMobilePage],
  imports: [CommonModule, RegisterCompleteMobileRoutingModule, WriterWebUiAuthAtomicModule],
})
export class RegisterCompleteMobileModule {}
