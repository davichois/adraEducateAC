import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../state/app.state';
import { selectIsLoading } from '../../../../state/selectors/auth.selectors';
import { AuthModel, Token } from '../../../../interfaces/auth.interfaces';
import { authComplete } from '../../../../state/actions/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  isLoading$: Observable<boolean> = new Observable();
  login$: Observable<AuthModel> = new Observable();
  input: string = '';
  token: Token | undefined;

  constructor(private auth: Store<AppState>, private router: Router) {}

  ngOnInit(): void {
    this.isLoading$ = this.auth.select(selectIsLoading);
  }

  onLogin() {
    if (this.input.length < 8) {
      throw console.error('Ponga una Indentificacion correcta');
    }

    this.token = JSON.parse(localStorage.getItem('token') || '{}');
    console.log(this.token);

    if (!this.token?.access_token) {
      const usuario: AuthModel = {
        usucredencial: this.input,
        pwdcredencial: this.input,
      };
      this.auth.dispatch(authComplete({ usuario }));
    }
  }
}
