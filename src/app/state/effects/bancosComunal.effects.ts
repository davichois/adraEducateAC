import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap } from 'rxjs/operators';
import { BancoComunalService } from '../../pages/admin/services/banco-comunal.service';

@Injectable()
export class BancosComunalEffects {
  loadBancosComunal$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Bancos Comunal] GET Bancos Comunal'),
      tap(() => console.log('GET ALL Bancos Comunales')),
      mergeMap(() =>
        this.bancoComunalService.findAllReport().pipe(
          map((bancosComunal) => ({
            type: '[Bancos Comunal] GET Bancos Comunal Success',
            bancosComunal: bancosComunal.body,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private bancoComunalService: BancoComunalService
  ) {}
}
