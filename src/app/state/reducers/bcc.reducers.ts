import { createReducer, on } from '@ngrx/store';
import { BCCState } from '../../interfaces/bcc.interfaces';
import { getBCCLoad, addBCC } from '../actions/bcc.actions';

// Estado inicial
export const initialState: BCCState = {
  bcc: {
    idBCC: 0,
    esBCC: '',
    idBanco: 0,
    idCapacitacion: 0,
  },
  bccs: [],
  isLoading: false,
};

// Los reducers
export const bccReducer = createReducer(
  initialState,
  on(getBCCLoad, (state) => {
    return { ...state, isLoading: true };
  }),

  on(addBCC, (state, { bcc }) => {
    return { ...state, isLoading: false, bcc };
  })
);
