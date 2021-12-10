import { createAction, props } from '@ngrx/store';
import { Persona } from '../../pages/admin/interfaces/persona.interface';

export const getPersonasLoad = createAction('[Persona] GET Personas');

export const getPersonasSuccess = createAction(
  '[Persona] GET Personas Success',
  props<{ personas: Persona[] }>()
);

export const addPersona = createAction(
  '[Persona]  POST success',
  props<{ persona: Persona }>()
);
