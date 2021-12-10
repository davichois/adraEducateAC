import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SharedModule } from '../../shared/shared.module';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AcordeonComponent } from './components/acordeon/acordeon.component';
import { AcordeonItemComponent } from './components/acordeon-item/acordeon-item.component';
import { TableComponent } from './components/table/table.component';
import { UsuarioPageComponent } from './pages/socio-page/socio-page.component';
import { BancoComunalPageComponent } from './pages/banco-comunal-page/banco-comunal-page.component';
import { TableItemsComponent } from './components/table-items/table-items.component';
import { PedidoOracionPageComponent } from './pages/pedido-oracion-page/pedido-oracion-page.component';
import { CapacitacionPageComponent } from './pages/capacitacion-page/capacitacion-page.component';
import { CapacitacionCreatorsPageComponent } from './pages/capacitacion-creators-page/capacitacion-creators-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    SideBarComponent,
    AcordeonComponent,
    AcordeonItemComponent,
    TableComponent,
    UsuarioPageComponent,
    BancoComunalPageComponent,
    TableItemsComponent,
    PedidoOracionPageComponent,
    CapacitacionPageComponent,
    CapacitacionCreatorsPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
