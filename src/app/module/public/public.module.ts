import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicViewComponent} from './views/public-view/public-view.component';
import {PublicRoutingModule} from './routes/public-routing.module';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    PublicViewComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule
  ]
})
export class PublicModule {
}
