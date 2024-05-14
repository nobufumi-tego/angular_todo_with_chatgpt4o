import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode, LOCALE_ID } from '@angular/core';
import { AppModule } from './app/app.module';
import { registerLocaleData } from '@angular/common';
import localeJa from '@angular/common/locales/ja';

registerLocaleData(localeJa);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
