import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from '@awread/global/environments';
import { customMain } from '@awread/global/settings';

if (environment.production) {
  enableProdMode();
}

const custom = customMain();


platformBrowserDynamic(custom.providers)
  .bootstrapModule(AppModule, { ngZoneEventCoalescing: true })
  .catch((err) => console.error(err));
