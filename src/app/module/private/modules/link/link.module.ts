import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CreateLinkComponent} from './view/create-link/create-link.component';
import {LinkRoutingModule} from './routes/link-routing.module';
import {MainLinkViewComponent} from './view/main-link-view/main-link-view.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {DropDownComponent} from '../../../../components/drop-down/drop-down.component';


@NgModule({
  declarations: [
    CreateLinkComponent,
    MainLinkViewComponent
  ],
  imports: [
    CommonModule,
    LinkRoutingModule,
    NgOptimizedImage,
    DragDropModule,
    DropDownComponent
  ]
})
export class LinkModule {
}
