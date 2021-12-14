import { createAction, props } from '@ngrx/store';
import { Recurso } from '../../interfaces/recurso.interface';

export const getRecursoLoad = createAction('[Recurso] GET recurso');

export const getRecursoSuccess = createAction(
  '[Recurso] GET recurso Success',
  props<{ recursos: Recurso[] }>()
);

export const getRecursoSesionLoad = createAction(
  '[Recurso] GET recurso Sesion',
  props<{ id: number }>()
);

export const getRecursoSesionSuccess = createAction(
  '[Recurso] GET recurso/sesion Success',
  props<{ recursos: Recurso[] }>()
);
