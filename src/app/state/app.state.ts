import { ActionReducerMap } from '@ngrx/store';

import { AuthState } from '../interfaces/auth.interfaces';
import { authReducer } from './reducers/auth.reducers';
import { PedidoOracionState } from '../pages/client/interfaces/pedidosOracion.interface';
import { pedidoOracionReducer } from './reducers/pedidoOracion.reducers';
import { PersonaState } from '../pages/admin/interfaces/persona.interface';
import { personaReducer } from './reducers/personas.reducers';

export interface AppState {
  auth: AuthState;
  pedidoOracion: PedidoOracionState;
  persona: PersonaState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  auth: authReducer,
  pedidoOracion: pedidoOracionReducer,
  persona: personaReducer,
};
