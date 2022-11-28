import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { TranslateModule } from '@ngx-translate/core';

import { IndexComponent } from './index.component';
import { SidebarModule } from '../shared/sidebar/sidebar.module';
import { IndexRoutingModule } from './index.routing.module';
import { ProjectsModule } from '../projects/projects.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    CommonModule,
    MatIconModule,
    TranslateModule,
    SidebarModule,
    IndexRoutingModule,
    ProjectsModule
  ],
  exports: [IndexComponent],
})
export class IndexModule {}
