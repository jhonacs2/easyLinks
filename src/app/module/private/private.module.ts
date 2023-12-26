import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PrivateRoutingModule} from './routes/private-routing.module';
import {PrivateViewComponent} from './views/private-view/private-view.component';
import {HeaderComponent} from './components/header/header.component';


@NgModule({
  declarations: [
    PrivateViewComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    HeaderComponent
  ]
})
export class PrivateModule {
}
