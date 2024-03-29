import {NgModule} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {CreateLinkComponent} from './view/create-link/create-link.component';
import {LinkRoutingModule} from './routes/link-routing.module';
import {MainLinkViewComponent} from './view/main-link-view/main-link-view.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {DropDownComponent} from '../../../../components/drop-down/drop-down.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LinksPhoneComponent} from './components/links-phone/links-phone.component';
import {ProfileComponent} from './view/profile/profile.component';
import { PreviewLinkComponent } from './view/preview-link/preview-link.component';


@NgModule({
  declarations: [
    CreateLinkComponent,
    MainLinkViewComponent,
    LinksPhoneComponent,
    ProfileComponent,
    PreviewLinkComponent
  ],
  exports: [
    LinksPhoneComponent
  ],
    imports: [
        CommonModule,
        LinkRoutingModule,
        NgOptimizedImage,
        DragDropModule,
        DropDownComponent,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class LinkModule {
}
