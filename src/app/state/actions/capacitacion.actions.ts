import { createAction, props } from '@ngrx/store';
import {
  Capacitacion,
  CapacitacionReport,
} from '../../interfaces/capacitacion.interface';

export const getCapacitacionLoad = createAction(
  '[Capacitacion] GET Capacitacion'
);

export const getCapacitacionReportSuccess = createAction(
  '[Capacitacion] GET Capacitacion Report Success',
  props<{ capacitacionesReport: CapacitacionReport[] }>()
);

export const getCapacitacionSuccess = createAction(
  '[Capacitacion] GET Capacitacion Success',
  props<{ capacitaciones: Capacitacion[] }>()
);

export const addCapacitacion = createAction(
  '[Capacitacion]  POST success',
  props<{ capacitacion: Capacitacion }>()
);
