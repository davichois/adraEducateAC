import { createReducer, on } from '@ngrx/store';
import { PersonaState } from '../../interfaces/persona.interface';
import { deletePersona } from '../actions/personas.actions';
import {
  getPersonasReportLoad,
  getPersonasReportSuccess,
} from '../actions/personas.actions';
import {
  getPersonasLoad,
  getPersonasSuccess,
  addPersona,
} from '../actions/personas.actions';

// Estado inicial
export const initialState: PersonaState = {
  personas: [],
  personasReport: [],
  persona: {},
  isLoading: false,
};

// Los reducers
export const personaReducer = createReducer(
  initialState,
  on(getPersonasReportLoad, (state) => {
    return { ...state, isLoading: true };
  }),

  on(getPersonasLoad, (state) => {
    return { ...state, isLoading: true };
  }),

  on(getPersonasSuccess, (state, { personas }) => {
    return { ...state, isLoading: false, personas };
  }),

  on(getPersonasReportSuccess, (state, { personasReport }) => {
    return { ...state, isLoading: false, personasReport };
  }),

  on(addPersona, (state, { persona }) => {
    return { ...state, isLoading: false, persona };
  }),

  on(deletePersona, (state) => {
    return { ...state };
  })
);
