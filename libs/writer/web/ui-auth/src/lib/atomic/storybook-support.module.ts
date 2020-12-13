import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [CommonModule, RouterModule.forRoot([], { useHash: true })],
    exports: [RouterModule],
    declarations: [],
    providers: [],
})
export class StorybookSupportModule { }
