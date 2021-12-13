import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

import { PersonaState } from '../../interfaces/persona.interface';

// Padre
export const selectPersonaFeature = (state: AppState) => state.persona;

// Hijo
export const selectIsLoading = createSelector(
  selectPersonaFeature,
  (state: PersonaState) => state.isLoading
);

// Hijo
export const selectPersonas = createSelector(
  selectPersonaFeature,
  (state: PersonaState) => state.personas
);

// Hijo
export const selectPersona = createSelector(
  selectPersonaFeature,
  (state: PersonaState) => state.persona
);
