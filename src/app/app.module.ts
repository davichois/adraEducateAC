import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_REDUCERS } from './state/app.state';
import { AuthEffects } from './state/effects/auth.effects';
import { PedidoOracionEffects } from './state/effects/pedidoOracion.effects';
import { PersonasEffects } from './state/effects/personas.effects';
import { BancosComunalEffects } from './state/effects/bancosComunal.effects';
import { CapacitacionEffects } from './state/effects/capacitacion.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({
      name: 'ADRA educate',
      maxAge: 25,
      logOnly: false,
    }),
    EffectsModule.forRoot([
      AuthEffects,
      PedidoOracionEffects,
      PersonasEffects,
      BancosComunalEffects,
      CapacitacionEffects,
    ]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
