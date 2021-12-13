import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespAdraEducate } from '../../interfaces/response.interface';
import { Usuario } from '../../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private apiUrl: string = `${environment.api}/usuario/`;

  constructor(private http: HttpClient) {}

  findByIdCredencial(credencial: string): Observable<RespAdraEducate> {
    return this.http.get<RespAdraEducate>(`${this.apiUrl}${credencial}`);
  }

  findStatistics(): Observable<RespAdraEducate> {
    return this.http.get<RespAdraEducate>(`${this.apiUrl}statistics`);
  }

  save(data: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.apiUrl, data);
  }

}
