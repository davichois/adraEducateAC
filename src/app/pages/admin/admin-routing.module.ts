import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { UsuarioPageComponent } from './pages/socio-page/socio-page.component';
import { BancoComunalPageComponent } from './pages/banco-comunal-page/banco-comunal-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'socio', component: UsuarioPageComponent, pathMatch: 'full' },
      { path: 'banco', component: BancoComunalPageComponent },
      { path: '**', redirectTo: 'socio' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
