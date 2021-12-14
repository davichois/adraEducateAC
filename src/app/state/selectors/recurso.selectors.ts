import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

import { CapacitacionState } from '../../interfaces/capacitacion.interface';
import { RecursoState } from '../../interfaces/recurso.interface';

// Padre
export const selectRecursoFeature = (state: AppState) => state.recurso;

// Hijo
export const selectIsLoading = createSelector(
  selectRecursoFeature,
  (state: RecursoState) => state.isLoading
);

// Hijo
export const selectRecurso = createSelector(
  selectRecursoFeature,
  (state: RecursoState) => state.recurso
);

// Hijo
export const selectRecursos = createSelector(
  selectRecursoFeature,
  (state: RecursoState) => state.recursos
);

export const selectItems = (state: AppState) => state.recurso.recursos;

export const getCapacitacionById = (id: any) =>
  createSelector(selectItems, (allItems) => {
    if (allItems) {
      return allItems.find((item) => {
        return item.idRecurso == id;
      });
    } else {
      return {};
    }
  });
