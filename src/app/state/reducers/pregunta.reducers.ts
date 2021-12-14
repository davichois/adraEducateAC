import { createReducer, on } from '@ngrx/store';
import {
  getPreguntaLoad,
  getPreguntaSuccess,
  getPreguntaRecursoLoad,
  getPreguntaRecursoSuccess,
} from '../actions/pregunta.actions';
import { PreguntaState } from '../../interfaces/pregunta.interface';

// Estado inicial
export const initialState: PreguntaState = {
  preguntas: [],
  pregunta: {
    idRecPregunta: 0,
    noPregunta: '',
    idPreRec: 0,
    alternativas: [],
  },
  isLoading: false,
};

// Los reducers
export const preguntaReducer = createReducer(
  initialState,
  on(getPreguntaLoad, (state) => {
    return { ...state, isLoading: true };
  }),

  on(getPreguntaSuccess, (state, { preguntas }) => {
    return { ...state, isLoading: false, preguntas };
  }),

  on(getPreguntaRecursoLoad, (state) => {
    return { ...state, isLoading: true };
  }),

  on(getPreguntaRecursoSuccess, (state, { preguntas }) => {
    return { ...state, isLoading: false, preguntas };
  })
);
