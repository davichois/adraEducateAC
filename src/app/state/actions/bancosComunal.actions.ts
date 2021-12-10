import { createAction, props } from '@ngrx/store';
import { BancoComunal } from '../../pages/admin/interfaces/bancoComunal.interface';

export const getBCLoad = createAction('[Bancos Comunal] GET Bancos Comunal');

export const getBCSuccess = createAction(
  '[Bancos Comunal] GET Bancos Comunal Success',
  props<{ bancosComunal: BancoComunal[] }>()
);

export const addBC = createAction(
  '[Bancos Comunal] POST Bancos Comunal success',
  props<{ bancoComunal: BancoComunal }>()
);
