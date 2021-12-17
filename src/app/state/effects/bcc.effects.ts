import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap } from 'rxjs/operators';
import { BccService } from '../../providers/services/bcc.service';

@Injectable()
export class BCCEffects {
  addBCC$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[BCC] POST BCC success'),
      tap(() => console.log('POST BCC')),
      mergeMap(({ bcc }) =>
        this.bccService.save(bcc).pipe(
          map(() => ({
            type: '[BCC] GET BCC',
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private bccService: BccService) {}
}
