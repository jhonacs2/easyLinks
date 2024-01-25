import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {LINK_ROUTES} from './link.routes';


@NgModule({
  imports: [RouterModule.forChild(LINK_ROUTES)],
  exports: [RouterModule]
})
export class LinkRoutingModule {
}
