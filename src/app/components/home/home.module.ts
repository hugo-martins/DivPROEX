import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';

import { HomeComponent } from './home.component';
import { ProjectsModule } from '../projects/projects.module';
import { SidebarModule } from '../shared/sidebar/sidebar.module';
import { HomeRoutingModule } from './home.routing.module';


@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule,
    ProjectsModule,
    TranslateModule,
    SidebarModule,
    HomeRoutingModule
  ],
})
export class HomeModule {}
