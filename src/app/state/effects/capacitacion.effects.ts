import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap } from 'rxjs/operators';
import { CapacitacionService } from '../../providers/services/capacitacion.service';

@Injectable()
export class CapacitacionEffects {
  loadCapacitacionesReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Capacitacion] GET Capacitacion'),
      tap(() => console.log('GET ALL Capacitaciones')),
      mergeMap(() =>
        this.capacitacionService.findAllReport().pipe(
          map((capacitacionesReport) => ({
            type: '[Capacitacion] GET Capacitacion Report Success',
            capacitacionesReport: capacitacionesReport.body,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadCapacitaciones$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Capacitacion] GET Capacitacion'),
      tap(() => console.log('GET ALL Capacitaciones')),
      mergeMap(() =>
        this.capacitacionService.findAll().pipe(
          map((capacitaciones) => ({
            type: '[Capacitacion] GET Capacitacion Success',
            capacitaciones: capacitaciones.body,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private capacitacionService: CapacitacionService
  ) {}
}
