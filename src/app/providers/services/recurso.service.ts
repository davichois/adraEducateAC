import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespAdraEducate } from '../../interfaces/response.interface';

@Injectable({
  providedIn: 'root',
})
export class RecursoService {
  private apiUrl: string = `${environment.api}/recurso/`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<RespAdraEducate> {
    return this.http.get<RespAdraEducate>(`${this.apiUrl}`);
  }

  findAllSesion(id:number): Observable<RespAdraEducate> {
    return this.http.get<RespAdraEducate>(`${this.apiUrl}sesion/${id}`);
  }

}
