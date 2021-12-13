import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap } from 'rxjs/operators';
import { BancoComunalService } from '../../providers/services/banco-comunal.service';

@Injectable()
export class BancosComunalEffects {
  loadBancosComunalReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Bancos Comunal] GET Bancos Comunal'),
      tap(() => console.log('GET ALL Bancos Comunales')),
      mergeMap(() =>
        this.bancoComunalService.findAllReport().pipe(
          map((bancosComunalReport) => ({
            type: '[Bancos Comunal] GET Bancos Comunal Report Success',
            bancosComunalReport: bancosComunalReport.body,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadBancosComunal$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Bancos Comunal] GET Bancos Comunal'),
      tap(() => console.log('GET ALL Bancos Comunales')),
      mergeMap(() =>
        this.bancoComunalService.findAll().pipe(
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
