import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthModel, AuthState, Token } from '../../interfaces/auth.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl: string = `${environment.api}/auth`;

  constructor(private http: HttpClient) {}

  login(data: AuthState): Observable<AuthModel> {
    console.log(data.usuario.usucredencial);

    const payload = new HttpParams()
      .set('usucredencial', data.usuario.usucredencial)
      .set('pwdcredencial', data.usuario.pwdcredencial);

    return this.http.post<AuthModel>(this.apiUrl, payload);
  }

  obtenerDatosToken(accessToken: string): any {
    if (accessToken != null && accessToken != '') {
      return JSON.parse(atob(accessToken.split('.')[1]));
    }
    return null;
  }
}

// guardarUsuario(accessToken: string): void {
//   let datos = this.obtenerDatosToken(accessToken);
//   this._usuario = {
//     nombre: datos.nombre,
//     apellido: datos.apellido,
//     email: datos.email,
//     username: datos.user_name,
//     roles: datos.authorities, // roles
//   };
//   sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
// }
