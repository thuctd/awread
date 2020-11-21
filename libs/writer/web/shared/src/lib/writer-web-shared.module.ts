import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellLayout } from './layouts/shell/shell.layout';
import { NavbarPart } from './parts/navbar/navbar.part';
import { HeaderPart } from './parts/header/header.part';
import { FooterPart } from './parts/footer/footer.part';

@NgModule({
  imports: [CommonModule],
  declarations: [ShellLayout, NavbarPart, HeaderPart, FooterPart],
  exports: [ShellLayout, NavbarPart, HeaderPart, FooterPart],
})
export class WriterWebSharedModule {}
