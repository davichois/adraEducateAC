import { createAction, props } from '@ngrx/store';
import {
  BancoComunal,
  BancoComunalReport,
} from '../../interfaces/bancoComunal.interface';

export const getBCLoad = createAction('[Bancos Comunal] GET Bancos Comunal');

export const getBCRSuccess = createAction(
  '[Bancos Comunal] GET Bancos Comunal Report Success',
  props<{ bancosComunalReport: BancoComunalReport[] }>()
);

export const getBCSuccess = createAction(
  '[Bancos Comunal] GET Bancos Comunal Success',
  props<{ bancosComunal: BancoComunal[] }>()
);

export const addBC = createAction(
  '[Bancos Comunal] POST Bancos Comunal success',
  props<{ bancoComunal: BancoComunal }>()
);
