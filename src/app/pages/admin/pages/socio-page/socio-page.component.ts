import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../state/app.state';
import { selectPersonas } from '../../../../state/selectors/personas.selectors';
import { getPersonasLoad } from '../../../../state/actions/personas.actions';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { getBCLoad } from '../../../../state/actions/bancosComunal.actions';
import { BancoComunal } from '../../../../interfaces/bancoComunal.interface';
import { selectBancosComunal } from '../../../../state/selectors/bancosComunal.selectors';

@Component({
  selector: 'app-usuario-page',
  templateUrl: './socio-page.component.html',
  styleUrls: ['./socio-page.component.css'],
})
export class UsuarioPageComponent implements OnInit {
  formPersona: FormGroup = new FormGroup({});
  stateForm: boolean = false;
  stateButtonsAccion: number = 1;
  header: string[] = [
    '#',
    'nombre',
    'dni',
    'telefono',
    'direccion',
    'acciones',
  ];

  personasList$: Observable<any[]> = new Observable();
  bancoList$: Observable<BancoComunal[]> = new Observable();

  constructor(private personaEffect: Store<AppState>) {}

  ngOnInit(): void {
    this.personaEffect.dispatch(getPersonasLoad());
    this.personaEffect.dispatch(getBCLoad());

    this.personasList$ = this.personaEffect.select(selectPersonas);
    this.bancoList$ = this.personaEffect.select(selectBancosComunal);

    this.initFormPersona();
  }

  initFormPersona(): void {
    this.formPersona = new FormGroup({
      noPersona: new FormControl('', [
        Validators.required,
        Validators.minLength(4),
      ]),
      apPaterno: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      apMaterno: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      nuTelefono: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      nuDni: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
      diPersona: new FormControl('', [Validators.required]),
      tiSexo: new FormControl('', [Validators.required]),
      idBancoComunal: new FormControl(0, [Validators.required]),
    });
  }

  onChangeStateForm() {
    this.stateForm = !this.stateForm;
    this.stateButtonsAccion = 1;
  }

  onSavePersona() {
    if (this.formPersona.invalid) {
      console.log('Invalido');
    }
  }
}
