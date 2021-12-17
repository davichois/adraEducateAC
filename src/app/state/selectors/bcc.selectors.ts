import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

import { BCCState } from '../../interfaces/bcc.interfaces';

// Padre
export const selectBCCFeature = (state: AppState) => state.bcc;

// Hijo
export const selectIsLoading = createSelector(
  selectBCCFeature,
  (state: BCCState) => state.isLoading
);

// Hijo
export const selectBCCLoading = createSelector(
  selectBCCFeature,
  (state: BCCState) => state.bcc
);
