import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, throwError } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap } from 'rxjs/operators';
import { AuthService } from '../../pages/auth/services/auth.service';

@Injectable()
export class AuthEffects {
  loginUsuario$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Auth user] Auth complete'),
      tap((usuario) => console.log(usuario)),
      mergeMap((usuario) =>
        this.authService.login(usuario).pipe(
          map((token) => ({
            type: '[Auth user] Auth Load',
            token: localStorage.setItem('token', JSON.stringify(token)),
          })),
          catchError(() => {
            return throwError('error when retrieving hourly forecast');
          })
        )
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService) {}
}

// this.action$.pipe(
//   ofType(addMovies),
//   tap((movie) => console.log(movie)),
//   concatMap(({ movie }) =>
//     this.dataService.addMovies(movie).pipe(
//       map((newMovie) => addMoviesSuccess(newMovie)),
//       catchError(() => EmptyError)
//     )
//   )
// );
