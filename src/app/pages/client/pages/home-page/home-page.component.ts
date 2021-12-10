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

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  dePedidoOracion: string = '';
  finalDatePedido: Date = new Date();

  pedidosOracion$: Observable<PedidoOracion[]> = new Observable();

  constructor(private pedidoOracionEffect: Store<AppState>) {}

  ngOnInit(): void {
    this.pedidoOracionEffect.dispatch(getPedOra());
    this.pedidosOracion$ =
      this.pedidoOracionEffect.select(selectPedidosOracion);
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
      this.pedidoOracionEffect.dispatch(addPedOra({ pedidoOracion }));
    }
  }
}
