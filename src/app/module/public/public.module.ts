import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicViewComponent} from './views/public-view/public-view.component';
import {PublicRoutingModule} from './routes/public-routing.module';

@NgModule({
  declarations: [
    PublicViewComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule {
}
