import { createAction, props } from '@ngrx/store';
import { AuthModel } from '../../interfaces/auth.interfaces';

export const auth = createAction('[Auth user] Auth Load');

export const authComplete = createAction(
  '[Auth user] Auth complete',
  props<{ usuario: AuthModel }>()
);
