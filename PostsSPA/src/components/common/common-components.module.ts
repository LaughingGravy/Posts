import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonToggleModule } from './common-toggle/common-toggle.module';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule, CommonToggleModule],
  declarations: [PaginationComponent],
  exports: [CommonToggleModule, PaginationComponent]
})
export class CommonComponentsModule { }
