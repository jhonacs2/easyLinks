import {Routes} from '@angular/router';

export const PRIVATE_ROUTES: Routes = [
  {
    path: 'link',
    loadChildren: () => import('../modules/link/link.module').then(m => m.LinkModule)
  },
  {
    path: '',
    redirectTo: 'link',
    pathMatch: 'full'
  }
];
