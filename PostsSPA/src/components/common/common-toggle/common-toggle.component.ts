import { Component, OnInit, Input, Output, EventEmitter, HostBinding, forwardRef } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-common-toggle',
  templateUrl: './common-toggle.component.html',
  styleUrls: ['./common-toggle.component.css']
})
export class CommonToggleComponent implements OnInit, ControlValueAccessor {
  private _value: any = null;

  @Input() readOnly: boolean = false;

  // event for parent client component to listen for changes
  @Output() changed = new EventEmitter();

  // Allow the input to be disabled, and when it is make it somewhat transparent.
  @Input() disabled: any;
  @HostBinding('style.opacity')
  get opacity() {
    return this.disabled || this.disabled === '' ?  0.60 : 1;
  }

  get value(): any {
    return this._value;
  }

 set value(value) {
   if (this._value !== value) {
     this._value = value;
     this.onChange(value);
     this.onTouched();
     this.changed.emit(value);
   }
 }

 onCheckedChanged(event: Event): void {
   this.value = (event.target as any).checked ? 1 : 0; 
 }

  constructor(public ngControl: NgControl) { 
    ngControl.valueAccessor = this;
  }

  ngOnInit() {
  }

  // ControlValueAccessor
  /**
  * Call when value has changed programmatically
  */
  public onChange(value: any) {}
  public onTouched(_?: any) {}

  /**
   * Model -> View changes
   */
  public writeValue(obj: any): void {
      this.value = obj;
  }
  public registerOnChange(fn: any): void { this.onChange = fn; }
  public registerOnTouched(fn: any): void { this.onTouched = fn; }
  public setDisabledState?(isDisabled: boolean): void { this.disabled = isDisabled; }

}
