import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'secure',
    loadChildren: () => import('../module/private/private.module').then(m => m.PrivateModule)
  },
  {
    path: 'public',
    loadChildren: () => import('../module/public/public.module').then(m => m.PublicModule)
  },
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  }
];
