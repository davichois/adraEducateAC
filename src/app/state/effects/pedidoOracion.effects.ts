import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, tap, concatMap } from 'rxjs/operators';
import { PedidoOracionService } from 'src/app/pages/client/services/pedido-oracion.service';

@Injectable()
export class PedidoOracionEffects {
  loadPedidoOracions$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Pedido Oracion] GET Pedido Oracion'),
      tap(() => console.log('GET ALL Pedidos Oracion')),
      mergeMap(() =>
        this.pedidoOracionService.findAll().pipe(
          map((pedidoOracion) => ({
            type: '[Pedido Oracion] GET Pedido Oracion Success',
            pedidoOracions: pedidoOracion.body,
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  addPedidoOracion$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Pedido Oracion]  POST proccess'),
      tap(() => console.log('ADD Pedido Oracion')),
      concatMap(({ pedidoOracion }) =>
        this.pedidoOracionService.save(pedidoOracion).pipe(
          map(() => ({
            type: '[Pedido Oracion] GET Pedido Oracion',
          })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private pedidoOracionService: PedidoOracionService
  ) {}
}
