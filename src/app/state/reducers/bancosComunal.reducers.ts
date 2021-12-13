import { createReducer, on } from '@ngrx/store';
import { BancoComunalState } from '../../interfaces/bancoComunal.interface';
import { getBCRSuccess, getBCSuccess } from '../actions/bancosComunal.actions';
import { getBCLoad, addBC } from '../actions/bancosComunal.actions';

// Estado inicial
export const initialState: BancoComunalState = {
  bancosComunal: [],
  bancosComunalReport: [],
  bancoComunal: {
    idBancoComunal: 0,
    idBcDistrito: 0,
    noBancoComunal: '',
  },
  isLoading: false,
};

// Los reducers
export const bancoComunalReducer = createReducer(
  initialState,
  on(getBCLoad, (state) => {
    return { ...state, isLoading: true };
  }),

  on(getBCRSuccess, (state, { bancosComunalReport }) => {
    return { ...state, isLoading: false, bancosComunalReport };
  }),

  on(getBCSuccess, (state, { bancosComunal }) => {
    return { ...state, isLoading: false, bancosComunal };
  }),

  on(addBC, (state, { bancoComunal }) => {
    return { ...state, isLoading: false, bancoComunal };
  })
);
