import { createReducer, on } from '@ngrx/store';
import { getPedOra, getPedOraSuccess } from '../actions/pedidosOracion.action';
import { PedidoOracionState } from '../../pages/client/interfaces/pedidosOracion.interface';
import { addPedOra } from '../actions/pedidosOracion.action';

// Estado inicial
export const initialState: PedidoOracionState = {
  pedidoOracions: [],
  pedidoOracion: {
    deContenido: '',
    feInicio: new Date(),
    feFin: new Date(),
    esPedido: '0',
    idPedPersona: 0,
  },
  isLoading: false,
};

// Los reducers
export const pedidoOracionReducer = createReducer(
  initialState,
  on(getPedOra, (state) => {
    return { ...state, isLoading: true };
  }),

  on(getPedOraSuccess, (state, { pedidoOracions }) => {
    return { ...state, isLoading: false, pedidoOracions };
  }),

  on(addPedOra, (state, { pedidoOracion }) => {
    return { ...state, isLoading: false, pedidoOracion };
  })
);
