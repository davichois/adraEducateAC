import { createAction, props } from '@ngrx/store';
import { Persona, PersonaReport } from '../../interfaces/persona.interface';

export const getPersonasReportLoad = createAction(
  '[Persona] GET Personas Report'
);

export const getPersonasReportSuccess = createAction(
  '[Persona] GET Personas Report Success',
  props<{ personasReport: PersonaReport[] }>()
);

export const getPersonasLoad = createAction('[Persona] GET Personas');

export const getPersonasSuccess = createAction(
  '[Persona] GET Personas Success',
  props<{ personas: Persona[] }>()
);

export const addPersona = createAction(
  '[Persona]  POST success',
  props<{ persona: Persona }>()
);

export const deletePersona = createAction(
  '[Persona]  Delete success',
  props<{ idPersona: number }>()
);
