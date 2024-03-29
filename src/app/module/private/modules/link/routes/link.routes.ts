import {Routes} from '@angular/router';
import {MainLinkViewComponent} from '../view/main-link-view/main-link-view.component';
import {CreateLinkComponent} from '../view/create-link/create-link.component';
import {ProfileComponent} from '../view/profile/profile.component';
import {PreviewLinkComponent} from '../view/preview-link/preview-link.component';

export const LINK_ROUTES: Routes = [
  {
    path: '',
    component: MainLinkViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'create',
        pathMatch: 'full'
      },
      {
        path: 'create',
        component: CreateLinkComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'preview',
        component: PreviewLinkComponent
      }
    ]
  }
];
