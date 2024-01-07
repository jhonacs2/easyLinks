import {Component, ElementRef, forwardRef, Input, ViewChild} from '@angular/core';
import {Option} from '../../module/private/interfaces/option.interface';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from 'rxjs';

const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => DropDownComponent),
  multi: true
};

@Component({
  selector: 'el-drop-down',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.scss',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class DropDownComponent implements ControlValueAccessor {
  @Input() options: Option[];

  @ViewChild('selector') selector!: ElementRef<HTMLDivElement>;
  @ViewChild('buttonSelect') buttonSelect!: ElementRef<HTMLButtonElement>;

  optionSelected: Option;

  private _value: string;
  private _innerValue: string;
  private _onTouchedCallback: () => void = noop;
  private _onChangeCallback: (_: any) => void = noop;

  private readonly ACTIVE_DROPDOWN_CLASS: string = 'el-custom-select-container--active';

  constructor() {
    this.options = [];
    this.optionSelected = {icon: '', text: ''};
    this._innerValue = '';
    this._value = '';
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  writeValue(value: any) {
    if (value !== this._innerValue) {
      this._innerValue = value;
    }
  }

  registerOnChange(fn: any): void {
    this._onChangeCallback = fn;
  }

  registerOnTouched(fn: any): void {
    this._onTouchedCallback = fn;
  }

  changeFn(option: Option): void {
    this.optionSelected = option;
    this.selector.nativeElement.classList.toggle(this.ACTIVE_DROPDOWN_CLASS);
    this._onChangeCallback(this.value);
  }

  onBlur() {
    this._onTouchedCallback();
  }

  toggleDropDown(): void {
    this.selector.nativeElement.classList.toggle(this.ACTIVE_DROPDOWN_CLASS);
  }
}
