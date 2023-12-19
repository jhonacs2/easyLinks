import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './routes/app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
