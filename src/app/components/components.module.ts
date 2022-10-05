import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { ProjectsModule } from './projects/projects.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    ProjectsModule,
    SharedModule
  ]
})
export class ComponentsModule { }
