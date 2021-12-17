import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap } from 'rxjs/operators';
import { PersonaService } from '../../providers/services/persona.service';

@Injectable()
export class PersonasEffects {
  loadPersonaReport$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Persona] GET Personas Report'),
      tap(() => console.log('GET ALL Personas report')),
      mergeMap(() =>
        this.personaService.findAllReport().pipe(
          map((personaReport) => ({
            type: '[Persona] GET Personas Report Success',
            personasReport: personaReport.body,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  loadPersona$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Persona] GET Personas'),
      tap(() => console.log('GET ALL Personas')),
      mergeMap(() =>
        this.personaService.findAll().pipe(
          map((personas) => ({
            type: '[Persona] GET Personas Success',
            personas: personas.body,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addPersona$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Persona]  POST success'),
      tap(() => console.log('POST Personas')),
      mergeMap(({ persona }) =>
        this.personaService.save(persona).pipe(
          map(() => ({
            type: '[Persona] GET Personas Report',
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  deletePersona$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Persona]  Delete success'),
      tap(() => console.log('GET ALL Personas')),
      mergeMap(({ idPersona }) =>
        this.personaService.delete(idPersona).pipe(
          map(() => ({
            type: '[Persona] GET Personas Report',
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private personaService: PersonaService
  ) {}
}
