import { createReducer, on } from '@ngrx/store';
import { RecursoState } from '../../interfaces/recurso.interface';
import { getRecursoSesionLoad } from '../actions/recurso.actions';
import {
  getRecursoLoad,
  getRecursoSuccess,
  getRecursoSesionSuccess,
} from '../actions/recurso.actions';

// Estado inicial
export const initialState: RecursoState = {
  recursos: [],
  recurso: {
    idRecurso: 0,
    noRecurso: '',
    deRecurso: '',
    fiURL: '',
    idRecTipoDoc: 0,
  },
  isLoading: false,
};

// Los reducers
export const recursoReducer = createReducer(
  initialState,
  on(getRecursoLoad, (state) => {
    return { ...state, isLoading: true };
  }),

  on(getRecursoSuccess, (state, { recursos }) => {
    return { ...state, isLoading: false, recursos };
  }),

  on(getRecursoSesionLoad, (state) => {
    return { ...state, isLoading: true };
  }),

  on(getRecursoSesionSuccess, (state, { recursos }) => {
    return { ...state, isLoading: false, recursos };
  })
);
