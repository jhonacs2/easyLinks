import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrivateRoutingModule} from './routes/private-routing.module';
import {PrivateViewComponent} from './views/private-view/private-view.component';


@NgModule({
  declarations: [
    PrivateViewComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule {
}
