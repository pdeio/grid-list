import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridListComponent } from './grid-list.component';



@NgModule({
  declarations: [GridListComponent],
  imports: [
    CommonModule
  ],
  exports: [GridListComponent]
})
export class GridListModule { }
