import { createReducer, on } from '@ngrx/store';
import { PersonaState } from '../../pages/admin/interfaces/persona.interface';
import {
  getPersonasLoad,
  getPersonasSuccess,
  addPersona,
} from '../actions/personas.action';

// Estado inicial
export const initialState: PersonaState = {
  personas: [],
  persona: {},
  isLoading: false,
};

// Los reducers
export const personaReducer = createReducer(
  initialState,
  on(getPersonasLoad, (state) => {
    return { ...state, isLoading: true };
  }),

  on(getPersonasSuccess, (state, { personas }) => {
    return { ...state, isLoading: false, personas };
  }),

  on(addPersona, (state, { persona }) => {
    return { ...state, isLoading: false, persona };
  })
);