import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { format } from 'date-fns';
import { PedidoOracion } from '../../interfaces/pedidosOracion.interface';
import { AppState } from '../../../../state/app.state';
import {
  addPedOra,
  getPedOra,
} from '../../../../state/actions/pedidosOracion.actions';
import { selectPedidosOracion } from '../../../../state/selectors/pedidoOracion.selectors';
import { Observable } from 'rxjs';
import { Capacitacion } from '../../../../interfaces/capacitacion.interface';
import { selectCapacitaciones } from 'src/app/state/selectors/capacitacion.selectors';
import { getCapacitacionLoad } from '../../../../state/actions/capacitacion.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  capacitacionMeeting: Capacitacion[] = [];
  capacitacionWebinar: Capacitacion[] = [];
  dePedidoOracion: string = '';
  finalDatePedido: Date = new Date();

  pedidosOracion$: Observable<PedidoOracion[]> = new Observable();
  capacitacionList$: Observable<Capacitacion[]> = new Observable();

  constructor(private homePageEffect: Store<AppState>) {}

  ngOnInit(): void {
    this.homePageEffect.dispatch(getPedOra());
    this.homePageEffect.dispatch(getCapacitacionLoad());

    this.pedidosOracion$ = this.homePageEffect.select(selectPedidosOracion);
    this.capacitacionList$ = this.homePageEffect.select(selectCapacitaciones);

    this.capacitacionList$.subscribe((data) => {
      data.forEach((cap) => {
        if (cap.tiCapacitacion === 'Meeting') {
          this.capacitacionMeeting.push(cap);
        } else {
          this.capacitacionWebinar.push(cap);
        }
      });
    });
  }

  onPedido() {
    const pedidoOracion: PedidoOracion = {
      deContenido: this.dePedidoOracion,
      esPedido: '1',
      feFin: this.finalDatePedido,
      feInicio: new Date(),
      idPedPersona: 1,
    };

    if (pedidoOracion.deContenido.length < 8) {
      console.error('ingresa mas caracteres');
    } else {
      this.homePageEffect.dispatch(addPedOra({ pedidoOracion }));
    }
  }
}
