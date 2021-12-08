import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { VerCapacitacionPageComponent } from './pages/ver-capacitacion-page/ver-capacitacion-page.component';
import { HeaderClientComponentComponent } from './components/header-client-component/header-client-component.component';
import { FooterClientComponentComponent } from './components/footer-client-component/footer-client-component.component';
import { RankingClientComponentComponent } from './components/ranking-client-component/ranking-client-component.component';
import { CardCapacitacionComponentComponent } from './components/card-capacitacion-component/card-capacitacion-component.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { JwtInterceptorInterceptor } from '../../jwt-interceptor.interceptor';

@NgModule({
  declarations: [
    ClientComponent,
    HomePageComponent,
    VerCapacitacionPageComponent,
    HeaderClientComponentComponent,
    FooterClientComponentComponent,
    RankingClientComponentComponent,
    CardCapacitacionComponentComponent,
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true,
    },
  ],
})
export class ClientModule {}
