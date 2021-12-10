import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { RespAdraEducate } from '../../../interfaces/response.interface';
import { PedidoOracion } from '../interfaces/pedidosOracion.interface';

@Injectable({
  providedIn: 'root',
})
export class PedidoOracionService {
  private apiUrl: string = `${environment.api}/pedidosOracion/`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<RespAdraEducate> {
    return this.http.get<RespAdraEducate>(`${this.apiUrl}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  findAllReport(): Observable<RespAdraEducate> {
    return this.http.get<RespAdraEducate>(`${this.apiUrl}report`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  save(data: PedidoOracion): Observable<PedidoOracion> {
    return this.http.post<PedidoOracion>(this.apiUrl, data);
  }

  update(data: PedidoOracion, id: number): Observable<PedidoOracion> {
    return this.http.put<PedidoOracion>(`${this.apiUrl}${id}`, data);
  }

  delete(id: any): Observable<PedidoOracion> {
    return this.http.delete<PedidoOracion>(`${this.apiUrl}${id}`);
  }
}
