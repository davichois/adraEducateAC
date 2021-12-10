import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap } from 'rxjs/operators';
import { PersonaService } from 'src/app/pages/admin/services/persona.service';

@Injectable()
export class PersonasEffects {
  loadPersona$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Persona] GET Personas'),
      tap(() => console.log('GET ALL Personas')),
      mergeMap(() =>
        this.personaService.findAllReport().pipe(
          map((personas) => ({
            type: '[Persona] GET Personas Success',
            personas: personas.body,
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
