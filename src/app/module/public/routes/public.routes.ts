import {Routes} from '@angular/router';
import {PublicViewComponent} from '../views/public-view/public-view.component';
import {LoginComponent} from '../components/login/login.component';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    component: PublicViewComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
