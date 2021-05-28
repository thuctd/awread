import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarPipe } from './pipes/avatar.pipe';

@NgModule({
  imports: [CommonModule],
  providers: [AvatarPipe],
  declarations: [AvatarPipe],
  exports: [AvatarPipe]
})
export class CoreUsersModule { }
