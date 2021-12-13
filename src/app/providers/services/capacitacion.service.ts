import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespAdraEducate } from '../../interfaces/response.interface';
import { Capacitacion } from '../../interfaces/capacitacion.interface';

@Injectable({
  providedIn: 'root',
})
export class CapacitacionService {
  private apiUrl: string = `${environment.api}/capacitacion/`;

  constructor(private http: HttpClient) {}

  findAll(): Observable<RespAdraEducate> {
    return this.http.get<RespAdraEducate>(`${this.apiUrl}`);
  }

  findAllReport(): Observable<RespAdraEducate> {
    return this.http.get<RespAdraEducate>(`${this.apiUrl}report`);
  }

  findById(idCap: number): Observable<RespAdraEducate> {
    return this.http.get<RespAdraEducate>(`${this.apiUrl}${idCap}`);
  }

  save(data: Capacitacion): Observable<Capacitacion> {
    return this.http.post<Capacitacion>(this.apiUrl, data);
  }

  update(data: Capacitacion, id: number): Observable<RespAdraEducate> {
    return this.http.put<RespAdraEducate>(`${this.apiUrl}${id}`, data);
  }
}
