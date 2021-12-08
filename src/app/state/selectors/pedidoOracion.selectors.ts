import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

import { PedidoOracionState } from '../../pages/client/interfaces/pedidosOracion.interface';

// Padre
export const selectPedidoOracionFeature = (state: AppState) =>
  state.pedidoOracion;

// Hijo
export const selectIsLoading = createSelector(
  selectPedidoOracionFeature,
  (state: PedidoOracionState) => state.isLoading
);

// Hijo
export const selectPedidosOracion = createSelector(
  selectPedidoOracionFeature,
  (state: PedidoOracionState) => state.pedidoOracions
);

// Hijo
export const selectPedidoOracion = createSelector(
  selectPedidoOracionFeature,
  (state: PedidoOracionState) => state.pedidoOracion
);
