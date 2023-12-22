import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {PRIVATE_ROUTES} from './private.routes';


@NgModule({
  imports: [RouterModule.forChild(PRIVATE_ROUTES)],
  exports: [RouterModule]
})
export class PrivateRoutingModule {
}
