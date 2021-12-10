import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RespAdraEducate } from '../../../interfaces/response.interface';
import { Observable } from 'rxjs';
import { Capacitacion } from '../interfaces/capacitacion.interface';

@Injectable({
  providedIn: 'root'
})
export class CapacitacionService {
  private apiUrl: string = `${environment.api}/capacitacion/`;

  constructor(private http: HttpClient) {}

  findAllReport(): Observable<RespAdraEducate> {
    return this.http.get<RespAdraEducate>(`${this.apiUrl}report`);
  }

  save(data: Capacitacion): Observable<Capacitacion> {
    return this.http.post<Capacitacion>(this.apiUrl, data);
  }

  update(data: Capacitacion, id: number): Observable<RespAdraEducate> {
    return this.http.put<RespAdraEducate>(`${this.apiUrl}${id}`, data);
  }
}
