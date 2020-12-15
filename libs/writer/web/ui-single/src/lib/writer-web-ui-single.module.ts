import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterWebUiSingleRoutingModule } from './writer-web-ui-single-routing.module';
import { SingleLayout } from './layouts/single/single.layout';
import { WriterWebFeatureSingleModule } from '@awread/writer/web/feature-single';

import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
// import { TopNavSection } from './layouts/single/top-nav/top-nav.section';
// import { LeftNavSection } from './layouts/single/left-nav/left-nav.section';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  imports: [CommonModule, WriterWebUiSingleRoutingModule, WriterWebFeatureSingleModule],
  declarations: [SingleLayout],
  exports: [SingleLayout],
})
export class WriterWebUiSingleModule {

  constructor(library: FaIconLibrary) {
    library.addIcons(faSearch, faSignOutAlt);
  }
}


