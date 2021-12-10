import { createReducer, on } from '@ngrx/store';
import { BancoComunalState } from '../../pages/admin/interfaces/bancoComunal.interface';
import {
  getBCLoad,
  getBCSuccess,
  addBC,
} from '../actions/bancosComunal.actions';

// Estado inicial
export const initialState: BancoComunalState = {
  bancosComunal: [],
  bancoComunal: {},
  isLoading: false,
};

// Los reducers
export const bancoComunalReducer = createReducer(
  initialState,
  on(getBCLoad, (state) => {
    return { ...state, isLoading: true };
  }),

  on(getBCSuccess, (state, { bancosComunal }) => {
    return { ...state, isLoading: false, bancosComunal };
  }),

  on(addBC, (state, { bancoComunal }) => {
    return { ...state, isLoading: false, bancoComunal };
  })
);
