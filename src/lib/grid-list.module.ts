import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { GridListComponent } from './grid-list.component';



@NgModule({
  declarations: [GridListComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [GridListComponent]
})
export class GridListModule { }
