import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { NavigationModule } from './app/navigation/navigation.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(NavigationModule);
