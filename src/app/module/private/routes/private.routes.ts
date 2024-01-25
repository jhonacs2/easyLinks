import {Routes} from '@angular/router';
import {PrivateViewComponent} from '../views/private-view/private-view.component';

export const PRIVATE_ROUTES: Routes = [
  {
    path: '',
    component: PrivateViewComponent,
    children: [
      {
        path: 'link',
        loadChildren: () => import('../modules/link/link.module').then(m => m.LinkModule)
      },
      {
        path: '',
        redirectTo:'link',
        pathMatch:'full'
      }
    ]
  }
];
