import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'secure',
    loadChildren: () => import('../module/private/private.module').then(m => m.PrivateModule)
  },
  {
    path: '',
    redirectTo: 'secure',
    pathMatch: 'full'
  }
];
