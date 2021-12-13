import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

import { CapacitacionState } from '../../interfaces/capacitacion.interface';

// Padre
export const selectCapacitacionFeature = (state: AppState) =>
  state.capacitacion;

// Hijo
export const selectIsLoading = createSelector(
  selectCapacitacionFeature,
  (state: CapacitacionState) => state.isLoading
);

// Hijo
export const selectCapacitacionesReport = createSelector(
  selectCapacitacionFeature,
  (state: CapacitacionState) => state.capacitacionesReport
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

export const selectItems = (state: AppState) =>
  state.capacitacion.capacitaciones;

export const getCapacitacionById = (id: any) =>
  createSelector(selectItems, (allItems) => {
    if (allItems) {
      return allItems.find((item) => {
        return item.idCapacitacion == id;
      });
    } else {
      return {};
    }
  });
