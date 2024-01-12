import {Component} from '@angular/core';

@Component({
  selector: 'el-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  uploadImage(imageInput: HTMLInputElement): void {
    imageInput.click();
  }
}
