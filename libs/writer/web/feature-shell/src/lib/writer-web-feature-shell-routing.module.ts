import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShellPage } from './shell/shell.page';

const routes: Routes = [
  {
    path: '',
    component: ShellPage,
    children: [
      {
        path: '',
        // pathMatch: 'full',
        // redirectTo: 'app-home-page,
      },
    ],
  },
];

@NgModule({
  declarations: [ShellPage],
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
  ],
})
export class WriterWebFeatureShellRoutingModule { }
