import { ActionReducerMap } from '@ngrx/store';

import { AuthState } from '../interfaces/auth.interfaces';
import { authReducer } from './reducers/auth.reducers';
import { PedidoOracionState } from '../pages/client/interfaces/pedidosOracion.interface';
import { pedidoOracionReducer } from './reducers/pedidoOracion.reducers';
import { personaReducer } from './reducers/personas.reducers';
import { BancoComunalState } from '../interfaces/bancoComunal.interface';
import { bancoComunalReducer } from './reducers/bancosComunal.reducers';
import { capacitacionReducer } from './reducers/capacitacion.reducers';
import { CapacitacionState } from '../interfaces/capacitacion.interface';
import { PersonaState } from '../interfaces/persona.interface';
import { RecursoState } from '../interfaces/recurso.interface';
import { recursoReducer } from './reducers/recurso.reducers';
import { PreguntaState } from '../interfaces/pregunta.interface';
import { preguntaReducer } from './reducers/pregunta.reducers';
import { BCCState } from '../interfaces/bcc.interfaces';
import { bccReducer } from './reducers/bcc.reducers';

export interface AppState {
  auth: AuthState;
  pedidoOracion: PedidoOracionState;
  persona: PersonaState;
  bancoComunal: BancoComunalState;
  capacitacion: CapacitacionState;
  recurso: RecursoState;
  pregunta: PreguntaState;
  bcc: BCCState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  auth: authReducer,
  pedidoOracion: pedidoOracionReducer,
  persona: personaReducer,
  bancoComunal: bancoComunalReducer,
  capacitacion: capacitacionReducer,
  recurso: recursoReducer,
  pregunta: preguntaReducer,
  bcc: bccReducer,
};
