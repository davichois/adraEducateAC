import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

import { PreguntaState } from '../../interfaces/pregunta.interface';

// Padre
export const selectPreguntaFeature = (state: AppState) => state.pregunta;

// Hijo
export const selectIsLoading = createSelector(
  selectPreguntaFeature,
  (state: PreguntaState) => state.isLoading
);

// Hijo
export const selectPregunta = createSelector(
  selectPreguntaFeature,
  (state: PreguntaState) => state.pregunta
);

// Hijo
export const selectPreguntas = createSelector(
  selectPreguntaFeature,
  (state: PreguntaState) => state.preguntas
);
