import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectRegisterComponent } from './components/projects/project-register/project-register.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./components/index/index.module').then((m) => m.IndexModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  { path: 'project-register', component: ProjectRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
