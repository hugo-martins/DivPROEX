import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListByCategoryComponent } from './list-by-category/list-by-category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectRegisterComponent } from './project-register/project-register.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    ListByCategoryComponent,
    ProjectRegisterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    ListByCategoryComponent
  ]
})
export class ProjectsModule { }
