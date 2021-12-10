import { createAction, props } from '@ngrx/store';
import { PedidoOracion } from '../../pages/client/interfaces/pedidosOracion.interface';

export const getPedOra = createAction('[Pedido Oracion] GET Pedido Oracion');

export const getPedOraSuccess = createAction(
  '[Pedido Oracion] GET Pedido Oracion Success',
  props<{ pedidoOracions: PedidoOracion[] }>()
);

export const addPedOra = createAction(
  '[Pedido Oracion]  POST proccess',
  props<{ pedidoOracion: PedidoOracion }>()
);

