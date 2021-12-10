import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../state/app.state';
import { selectPersonas } from '../../../../state/selectors/personas.selectors';
import { getPersonasLoad } from '../../../../state/actions/personas.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuario-page',
  templateUrl: './socio-page.component.html',
  styleUrls: ['./socio-page.component.css'],
})
export class UsuarioPageComponent implements OnInit {
  stateForm: boolean = false;
  header: string[] = [
    '#',
    'nombre',
    'dni',
    'telefono',
    'direccion',
    'acciones',
  ];
  personasList$: Observable<any[]> = new Observable();

  constructor(private personaEffect: Store<AppState>) {}

  ngOnInit(): void {
    this.personaEffect.dispatch(getPersonasLoad());
    this.personasList$ = this.personaEffect.select(selectPersonas);
  }

  onChangeStateForm() {
    this.stateForm = !this.stateForm;
  }
}
