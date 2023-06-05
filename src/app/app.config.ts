import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, RouteReuseStrategy } from '@angular/router';
//import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import  routes  from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // importProvidersFrom(IonicModule.forRoot({})),
    //no idea what this is supposed to do - I'm just following this article: https://ionic.zendesk.com/hc/en-us/articles/10386373742231-Angular-Standalone-Components-with-Ionic
    // So I'm commenting it out for now
    //I assume it will be usefull for the routing strategy used by ionic
    provideRouter(routes), 
  ],
};
