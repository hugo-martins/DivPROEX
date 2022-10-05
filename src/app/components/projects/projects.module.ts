import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListByCategoryComponent } from './list-by-category/list-by-category.component';



@NgModule({
  declarations: [
    ListByCategoryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListByCategoryComponent
  ]
})
export class ProjectsModule { }
