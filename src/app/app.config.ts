import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

import  routes  from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // end-to-end testing
    provideProtractorTestingSupport(), 
    provideRouter(routes) ]
};
