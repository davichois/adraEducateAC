import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../state/app.state';
import { getPedOra } from '../../../../state/actions/pedidosOracion.actions';
import { selectPedidosOracion } from '../../../../state/selectors/pedidoOracion.selectors';

@Component({
  selector: 'app-pedido-oracion-page',
  templateUrl: './pedido-oracion-page.component.html',
  styleUrls: ['./pedido-oracion-page.component.css'],
})
export class PedidoOracionPageComponent implements OnInit {
  stateForm: boolean = false;
  header: string[] = [
    '#',
    'persona',
    'fecha inicio',
    'fecha fin',
    'estado',
    'acciones',
  ];
  pedidosOracionList$: Observable<any[]> = new Observable();

  constructor(private pedidoOracionEfeect: Store<AppState>) {}

  ngOnInit(): void {
    this.pedidoOracionEfeect.dispatch(getPedOra());
    this.pedidosOracionList$ =
      this.pedidoOracionEfeect.select(selectPedidosOracion);
  }

  onChangeStateForm() {
    this.stateForm = !this.stateForm;
  }
}
