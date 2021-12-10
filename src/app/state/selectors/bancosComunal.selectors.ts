import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

import { BancoComunalState } from '../../pages/admin/interfaces/bancoComunal.interface';

// Padre
export const selectBancoComunalFeature = (state: AppState) =>
  state.bancoComunal;

// Hijo
export const selectIsLoading = createSelector(
  selectBancoComunalFeature,
  (state: BancoComunalState) => state.isLoading
);

// Hijo
export const selectBancosComunal = createSelector(
  selectBancoComunalFeature,
  (state: BancoComunalState) => state.bancosComunal
);

// Hijo
export const selectBancoComunal = createSelector(
  selectBancoComunalFeature,
  (state: BancoComunalState) => state.bancoComunal
);
