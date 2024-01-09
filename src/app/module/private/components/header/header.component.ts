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

}
