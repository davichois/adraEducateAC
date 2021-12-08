import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

import { AuthState } from '../../interfaces/auth.interfaces';

// Padre
export const selectAuthFeature = (state: AppState) => state.auth;

// Hijo
export const selectIsLoading = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.isLoading
);

// Hijo
export const selectAuth = createSelector(
  selectAuthFeature,
  (state: AuthState) => state.usuario
);
