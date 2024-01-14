import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'el-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  @ViewChild('imageInput') public imageInput!: ElementRef<HTMLInputElement>;
  @ViewChild('containerImageInput') public containerImageInput!: ElementRef<HTMLDivElement>;

  isImageUpload: boolean;

  constructor(private _renderTwo: Renderer2) {
    this.isImageUpload = false;
  }

  uploadImage(): void {
    this.imageInput.nativeElement.click();
  }

  loadImage(): void {
    if (this.imageInput.nativeElement.files!.length > 0) {
      const urlImage = window.URL.createObjectURL(this.imageInput.nativeElement.files![0]);
      this._setBackgroundImage(urlImage);
      this._activeInputImage();
      this.isImageUpload = true;
    }
  }

  private _setBackgroundImage(urlImage: string): void {
    this._renderTwo.setStyle(this.containerImageInput.nativeElement, 'background-image', 'url(\'' + urlImage + '\')');
  }

  private _activeInputImage(): void {
    this._renderTwo.addClass(this.containerImageInput.nativeElement, 'el-profile-container__image-input--active');
  }
}
