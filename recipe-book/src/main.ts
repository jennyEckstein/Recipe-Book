import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';
import { ShoppingListService } from './app/shopping-list/shopping-list.service';

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule, ShoppingListService);
