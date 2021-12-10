import { createReducer, on } from '@ngrx/store';
import { CapacitacionState } from '../../pages/admin/interfaces/capacitacion.interface';
import {
  getCapacitacionLoad,
  getCapacitacionSuccess,
  addCapacitacion,
} from '../actions/capacitacion.actions';

// Estado inicial
export const initialState: CapacitacionState = {
  capacitaciones: [],
  capacitacion: {},
  isLoading: false,
};

// Los reducers
export const capacitacionReducer = createReducer(
  initialState,
  on(getCapacitacionLoad, (state) => {
    return { ...state, isLoading: true };
  }),

  on(getCapacitacionSuccess, (state, { capacitaciones }) => {
    return { ...state, isLoading: false, capacitaciones };
  }),

  on(addCapacitacion, (state, { capacitacion }) => {
    return { ...state, isLoading: false, capacitacion };
  })
);
