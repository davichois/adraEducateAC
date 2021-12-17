import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BCC } from '../../interfaces/bcc.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BccService {
  private apiUrl: string = `${environment.api}/bcc/`;

  constructor(private http: HttpClient) {}

  save(data: BCC): Observable<BCC> {
    return this.http.post<BCC>(this.apiUrl, data);
  }
}
