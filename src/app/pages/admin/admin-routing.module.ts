import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { UsuarioPageComponent } from './pages/socio-page/socio-page.component';
import { BancoComunalPageComponent } from './pages/banco-comunal-page/banco-comunal-page.component';
import { PedidoOracionPageComponent } from './pages/pedido-oracion-page/pedido-oracion-page.component';
import { CapacitacionPageComponent } from './pages/capacitacion-page/capacitacion-page.component';
import { CapacitacionCreatorsPageComponent } from './pages/capacitacion-creators-page/capacitacion-creators-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'socio', component: UsuarioPageComponent, pathMatch: 'full' },
      { path: 'banco', component: BancoComunalPageComponent },
      { path: 'pedidoOracion', component: PedidoOracionPageComponent },
      {
        path: 'capacitacion',
        children: [
          {
            path: '',
            component: CapacitacionPageComponent,
            pathMatch: 'full',
          },
          {
            path: 'creators',
            component: CapacitacionCreatorsPageComponent,
          },
        ],
      },
      { path: '**', redirectTo: 'socio' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
