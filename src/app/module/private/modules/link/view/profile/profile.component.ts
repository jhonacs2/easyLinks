import {AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subject, takeUntil} from 'rxjs';
import {ProfileService} from '../../services/profile.service';

@Component({
  selector: 'el-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements AfterViewInit, OnDestroy {
  @ViewChild('imageInput') public imageInput!: ElementRef<HTMLInputElement>;
  @ViewChild('containerImageInput') public containerImageInput!: ElementRef<HTMLDivElement>;

  isImageUpload: boolean;
  profileForm: FormGroup;

  private _urlImage: string;
  private _unsubscribe: Subject<void>;

  constructor(private _profileService: ProfileService,
              private _renderTwo: Renderer2,
              private _fb: FormBuilder) {
    this.isImageUpload = false;
    this.profileForm = this._fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      image: [undefined, [Validators.required]]
    });
    this._urlImage = '';
    this._unsubscribe = new Subject<void>();
  }

  ngAfterViewInit(): void {
    this._listenProfileFormValuesChanges();
  }

  ngOnDestroy() {
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  uploadImage(): void {
    this.imageInput.nativeElement.click();
  }

  loadImage(): void {
    if (this.imageInput.nativeElement.files!.length > 0) {
      this._urlImage = window.URL.createObjectURL(this.imageInput.nativeElement.files![0]);
      this._setBackgroundImage(this._urlImage);
      this._activeInputImage();
      this._setImageInputToForm();
      this.isImageUpload = true;
    }
  }

  updateProfile(): void {
    //   TODO: Implement profile update
  }

  private _setBackgroundImage(urlImage: string): void {
    this._renderTwo.setStyle(this.containerImageInput.nativeElement, 'background-image', `url('${urlImage}')`);
  }

  private _activeInputImage(): void {
    this._renderTwo.addClass(this.containerImageInput.nativeElement, 'el-profile-container__image-input--active');
  }

  private _setImageInputToForm(): void {
    const fileList: FileList | null = this.imageInput.nativeElement.files;
    if (fileList && fileList.length > 0) {
      this.profileForm.get('image')?.setValue(fileList[0]);
    }
  }

  private _listenProfileFormValuesChanges(): void {
    this.profileForm.valueChanges.pipe(takeUntil(this._unsubscribe))
      .subscribe(profileFormValue => this._profileService.setProfileDetails({
        ...profileFormValue,
        image: this._urlImage
      }));
  }
}
