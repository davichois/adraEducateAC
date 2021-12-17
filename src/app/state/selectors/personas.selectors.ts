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
export const selectPersonasReport = createSelector(
  selectPersonaFeature,
  (state: PersonaState) => state.personasReport
);

// Hijo
export const selectPersona = createSelector(
  selectPersonaFeature,
  (state: PersonaState) => state.persona
);

export const getPersonaById = (id: any) =>
  createSelector(selectPersonas, (allItems) => {
    if (allItems) {
      return allItems.find((item) => {
        return item.idPersona == id;
      });
    } else {
      return {};
    }
  });
