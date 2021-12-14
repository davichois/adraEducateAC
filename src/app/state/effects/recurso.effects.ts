import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap } from 'rxjs/operators';
import { RecursoService } from '../../providers/services/recurso.service';

@Injectable()
export class RecursoEffects {
  loadRecursos$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Recurso] GET recurso Sesion'),
      tap((id) => console.log('GET ALL Recursos sesion', id)),
      mergeMap(({id}) =>
        this.recursoService.findAllSesion(id).pipe(
          map((recursos) => ({
            type: '[Recurso] GET recurso/sesion Success',
            recursos: recursos.body,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private recursoService: RecursoService
  ) {}
}
