import { createReducer, on } from '@ngrx/store';
import { CapacitacionState } from '../../interfaces/capacitacion.interface';
import { getCapacitacionReportSuccess } from '../actions/capacitacion.actions';
import {
  getCapacitacionLoad,
  getCapacitacionSuccess,
  addCapacitacion,
} from '../actions/capacitacion.actions';

// Estado inicial
export const initialState: CapacitacionState = {
  capacitacionesReport: [],
  capacitaciones: [],
  capacitacion: {
    idCapacitacion: 0,
    noCapacitacion: '',
    deCapacitacion: '',
    feInicioCapacitacion: new Date(),
    feFinCapacitacion: new Date(),
    tiCapacitacion: '',
    idCapCategoria: 0,
    totalRecCapacitacion: '',
    esCapacitacion: '',
    fiImageURL: '',
    sesions: [],
  },
  isLoading: false,
};

// Los reducers
export const capacitacionReducer = createReducer(
  initialState,
  on(getCapacitacionLoad, (state) => {
    return { ...state, isLoading: true };
  }),

  on(getCapacitacionReportSuccess, (state, { capacitacionesReport }) => {
    return { ...state, isLoading: false, capacitacionesReport };
  }),

  on(getCapacitacionSuccess, (state, { capacitaciones }) => {
    return { ...state, isLoading: false, capacitaciones };
  }),

  on(addCapacitacion, (state, { capacitacion }) => {
    return { ...state, isLoading: false, capacitacion };
  })
);
