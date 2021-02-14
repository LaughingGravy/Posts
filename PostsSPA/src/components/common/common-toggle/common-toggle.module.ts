import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonToggleComponent } from './common-toggle.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [CommonToggleComponent],
  exports: [CommonToggleComponent],
  entryComponents: [CommonToggleComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommonToggleModule { }
