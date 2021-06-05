import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarSizePipe } from './pipes/avatar-size.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [AvatarSizePipe],
  exports: [AvatarSizePipe]
})
export class CoreUsersModule { }
