import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListByCategoryComponent } from './list-by-category/list-by-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListByCategoryComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ListByCategoryComponent
  ]
})
export class ProjectsModule { }
