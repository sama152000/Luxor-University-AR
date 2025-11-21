import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Ensure jQuery is available globally for libraries that expect a global `$`/`jQuery` (e.g., ngx-slick-carousel)
import * as jquery from 'jquery';
// `jquery` may be a namespace with a `.default` property depending on bundler interop.
const jQueryInstance: any = (jquery as any).default || jquery;
(window as any).$ = jQueryInstance;
(window as any).jQuery = jQueryInstance;

// Import slick-carousel so it registers its plugin onto the same global jQuery instance
// (path points to the package entry; the module is side-effectful)
import 'slick-carousel';

bootstrapApplication(App, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient() 
  ]
}).catch((err) => console.error(err));
