import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthModel, AuthState } from '../../../interfaces/auth.interfaces';
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
}

// .pipe(
//   catchError((error: HttpErrorResponse) => {
//     console.error(error);
//     return throwError(error);
//   })
// );
