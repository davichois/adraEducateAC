import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespAdraEducate } from '../../interfaces/response.interface';
import { Persona } from '../../interfaces/persona.interface';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  private apiUrl: string = `${environment.api}/persona/`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<RespAdraEducate> {
    return this.http.get<RespAdraEducate>(`${this.apiUrl}`);
  }

  findAllReport(): Observable<RespAdraEducate> {
    return this.http.get<RespAdraEducate>(`${this.apiUrl}report`);
  }

  save(data: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.apiUrl, data);
  }

  update(data: Persona, id: number): Observable<RespAdraEducate> {
    return this.http.put<RespAdraEducate>(`${this.apiUrl}${id}`, data);
  }

  delete(id: number): Observable<RespAdraEducate> {
    return this.http.delete<RespAdraEducate>(`${this.apiUrl}${id}`);
  }
}
