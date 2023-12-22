import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateLinkComponent} from './view/create-link/create-link.component';
import {LinkRoutingModule} from './routes/link-routing.module';


@NgModule({
  declarations: [CreateLinkComponent],
  imports: [
    CommonModule,
    LinkRoutingModule
  ]
})
export class LinkModule {
}
