import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnchorDirective } from './anchor.directive';


@NgModule({
   imports: [CommonModule],
   declarations: [
    AnchorDirective
   ],
   exports: [
      AnchorDirective
   ]
})
export class DirectivesModule { }
