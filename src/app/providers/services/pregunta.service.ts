import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespAdraEducate } from '../../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  private apiUrl: string = `${environment.api}/pregunta/`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<RespAdraEducate> {
    return this.http.get<RespAdraEducate>(`${this.apiUrl}`);
  }

  findAllRecurso(id:number): Observable<RespAdraEducate> {
    return this.http.get<RespAdraEducate>(`${this.apiUrl}recurso/${id}`);
  }
}
