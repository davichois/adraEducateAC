import { createReducer, on } from '@ngrx/store';
import { AuthState } from '../../interfaces/auth.interfaces';
import { auth, authComplete } from '../actions/auth.actions';

// Estado inicial
export const initialState: AuthState = {
  usuario: { usucredencial: '', pwdcredencial: '' },
  isLoading: false,
};

// Los reducers
export const authReducer = createReducer(
  initialState,
  on(auth, (state) => {
    return { ...state, isLoading: false };
  }),

  on(authComplete, (state, { usuario }) => {
    return { ...state, isLoading: true, usuario };
  })
);
