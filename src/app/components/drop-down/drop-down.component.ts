import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Option} from '../../module/private/interfaces/option.interface';

@Component({
  selector: 'el-drop-down',
  standalone: true,
  imports: [],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.scss'
})
export class DropDownComponent {
  @Input() options: Option[];

  @ViewChild('selector') selector!: ElementRef<HTMLDivElement>;
  @ViewChild('buttonSelect') buttonSelect!: ElementRef<HTMLButtonElement>;

  optionSelected: Option;

  private readonly ACTIVE_DROPDOWN_CLASS: string = 'el-custom-select-container--active';

  constructor() {
    this.options = [];
    this.optionSelected = {icon: '', text: ''};
  }

  toggleDropDown(): void {
    this.selector.nativeElement.classList.toggle(this.ACTIVE_DROPDOWN_CLASS);
  }

  onChange(event: Event): void {
    const valueInputRadio = event.target as HTMLInputElement;
    this.setOptionSelected(valueInputRadio.value);
    this.selector.nativeElement.classList.toggle(this.ACTIVE_DROPDOWN_CLASS);
  }

  setOptionSelected(value: string): void {
    this.optionSelected = this.options
      .find(option => option.text === value) || {icon: '', text: ''};
  }
}
