import {Routes} from '@angular/router';
import {PublicViewComponent} from '../views/public-view/public-view.component';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    component: PublicViewComponent,
    children: []
  }
];
