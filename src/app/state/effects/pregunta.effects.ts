import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap } from 'rxjs/operators';
import { PreguntaService } from '../../providers/services/pregunta.service';

@Injectable()
export class PreguntaEffects {
  loadRecursos$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Pregunta] GET pregunta/recurso'),
      tap((id) => console.log('GET ALL pregunta/recurso', id)),
      mergeMap(({ id }) =>
        this.preguntaService.findAllRecurso(id).pipe(
          map((preguntas) => ({
            type: '[Pregunta] GET pregunta/recurso Success',
            preguntas: preguntas.body,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private preguntaService: PreguntaService
  ) {}
}
