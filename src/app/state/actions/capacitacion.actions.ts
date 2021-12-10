import { createAction, props } from '@ngrx/store';
import { Capacitacion } from '../../pages/admin/interfaces/capacitacion.interface';

export const getCapacitacionLoad = createAction('[Capacitacion] GET Capacitacion');

export const getCapacitacionSuccess = createAction(
  '[Capacitacion] GET Capacitacion Success',
  props<{ capacitaciones: Capacitacion[] }>()
);

export const addCapacitacion = createAction(
  '[Capacitacion]  POST success',
  props<{ capacitacion: Capacitacion }>()
);
