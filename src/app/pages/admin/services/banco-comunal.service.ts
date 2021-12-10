import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RespAdraEducate } from '../../../interfaces/response.interface';
import { BancoComunal } from '../interfaces/bancoComunal.interface';

@Injectable({
  providedIn: 'root',
})
export class BancoComunalService {
  private apiUrl: string = `${environment.api}/bancosComunal/`;

  constructor(private http: HttpClient) {}

  findAllReport(): Observable<RespAdraEducate> {
    return this.http.get<RespAdraEducate>(`${this.apiUrl}report`);
  }

  save(data: BancoComunal): Observable<BancoComunal> {
    return this.http.post<BancoComunal>(this.apiUrl, data);
  }

  update(data: BancoComunal, id: number): Observable<RespAdraEducate> {
    return this.http.put<RespAdraEducate>(`${this.apiUrl}${id}`, data);
  }
}
