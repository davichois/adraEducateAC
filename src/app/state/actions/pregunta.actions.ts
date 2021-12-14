import { createAction, props } from '@ngrx/store';
import { Pregunta } from '../../interfaces/pregunta.interface';

export const getPreguntaLoad = createAction('[Pregunta] GET pregunta');

export const getPreguntaSuccess = createAction(
  '[Pregunta] GET pregunta Success',
  props<{ preguntas: Pregunta[] }>()
);

export const getPreguntaRecursoLoad = createAction(
  '[Pregunta] GET pregunta/recurso',
  props<{ id: number }>()
);

export const getPreguntaRecursoSuccess = createAction(
  '[Pregunta] GET pregunta/recurso Success',
  props<{ preguntas: Pregunta[] }>()
);
