import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'el-header',
  standalone: true,
  templateUrl: './header.component.html',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isPreviewViewActive: boolean;

  constructor() {
    this.isPreviewViewActive = false;
  }

  changeToPreviewView(isPreviewActive: boolean): void {
    this.isPreviewViewActive = isPreviewActive;
  }
}
