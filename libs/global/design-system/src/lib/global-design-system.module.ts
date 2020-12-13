import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test/test.component';
import { StorybookSupportModule } from './storybook-support.module';

@NgModule({
  imports: [CommonModule,StorybookSupportModule],
  exports: [TestComponent],
  declarations: [TestComponent]
})
export class GlobalDesignSystemModule {}
