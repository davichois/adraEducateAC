import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

import { BancoComunalState } from '../../interfaces/bancoComunal.interface';

// Padre
export const selectBancoComunalFeature = (state: AppState) =>
  state.bancoComunal;

// Hijo
export const selectIsLoading = createSelector(
  selectBancoComunalFeature,
  (state: BancoComunalState) => state.isLoading
);

// Hijo
export const selectBancosComunalReport = createSelector(
  selectBancoComunalFeature,
  (state: BancoComunalState) => state.bancosComunalReport
);

// Hijo
export const selectBancosComunal = createSelector(
  selectBancoComunalFeature,
  (state: BancoComunalState) => state.bancosComunal
);
