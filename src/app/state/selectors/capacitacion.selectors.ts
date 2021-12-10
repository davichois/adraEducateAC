import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

import { CapacitacionState } from '../../pages/admin/interfaces/capacitacion.interface';

// Padre
export const selectCapacitacionFeature = (state: AppState) =>
  state.capacitacion;

// Hijo
export const selectIsLoading = createSelector(
  selectCapacitacionFeature,
  (state: CapacitacionState) => state.isLoading
);

// Hijo
export const selectCapacitaciones = createSelector(
  selectCapacitacionFeature,
  (state: CapacitacionState) => state.capacitaciones
);

// Hijo
export const selectCapacitacion = createSelector(
  selectCapacitacionFeature,
  (state: CapacitacionState) => state.capacitacion
);
