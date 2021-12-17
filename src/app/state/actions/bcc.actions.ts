import { createAction, props } from '@ngrx/store';
import { BCC } from '../../interfaces/bcc.interfaces';

export const getBCCLoad = createAction('[BCC] GET BCC');

export const addBCC = createAction(
  '[BCC] POST BCC success',
  props<{ bcc: BCC }>()
);
