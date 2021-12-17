import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../state/app.state';
import { selectPersonasReport } from '../../../../state/selectors/personas.selectors';
import {
  getPersonasReportLoad,
  getPersonasLoad,
} from '../../../../state/actions/personas.actions';
import { Observable } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { getBCLoad } from '../../../../state/actions/bancosComunal.actions';
import { BancoComunal } from '../../../../interfaces/bancoComunal.interface';
import { selectBancosComunal } from '../../../../state/selectors/bancosComunal.selectors';
import { Persona } from '../../../../interfaces/persona.interface';
import { getPersonaById } from '../../../../state/selectors/personas.selectors';
import {
  deletePersona,
  addPersona,
} from '../../../../state/actions/personas.actions';

@Component({
  selector: 'app-usuario-page',
  templateUrl: './socio-page.component.html',
  styleUrls: ['./socio-page.component.css'],
})
export class UsuarioPageComponent implements OnInit {
  formPersona: FormGroup = new FormGroup({});
  stateForm: boolean = false;
  stateButtonsAccion: number = 1;
  idPersonaActive: any = '';
  header: string[] = [
    '#',
    'nombre',
    'dni',
    'telefono',
    'direccion',
    'acciones',
  ];

  personasReportList$: Observable<any[]> = new Observable();
  personaById$: Observable<any> = new Observable();
  bancoList$: Observable<BancoComunal[]> = new Observable();

  personaId: Persona = {};

  constructor(private personaEffect: Store<AppState>) {}

  ngOnInit(): void {
    this.personaEffect.dispatch(getPersonasReportLoad());
    this.personaEffect.dispatch(getPersonasLoad());
    this.personaEffect.dispatch(getBCLoad());

    this.personasReportList$ = this.personaEffect.select(selectPersonasReport);
    this.bancoList$ = this.personaEffect.select(selectBancosComunal);

    this.personaById$ = this.personaEffect.select(
      getPersonaById(this.idPersonaActive)
    );

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

  onPersona(persona: Persona) {
    this.idPersonaActive = persona.idPersona;
  }

  onSavePersona() {
    const data = {
      noPersona: this.formPersona.value['noPersona'],
      apPaterno: this.formPersona.value['apPaterno'],
      apMaterno: this.formPersona.value['apMaterno'],
      nuTelefono: this.formPersona.value['nuTelefono'],
      nuDNI: this.formPersona.value['nuDni'],
      diPersona: this.formPersona.value['diPersona'],
      tiSexo: this.formPersona.value['tiSexo'],
      idBancoComunal: this.formPersona.value['idBancoComunal'],
    };
    if (this.formPersona.invalid) {
      throw new Error('Invalido');
    }
    this.personaEffect.dispatch(addPersona({ persona: data }));
  }

  onEditPersona() {
    this.personaById$ = this.personaEffect.select(
      getPersonaById(this.idPersonaActive)
    );
    this.personaById$.subscribe((data) => {
      this.personaId = data;
    });
    this.formPersona.patchValue({
      noPersona: this.personaId?.noPersona,
      apPaterno: this.personaId?.apPaterno,
      apMaterno: this.personaId?.apMaterno,
      nuTelefono: this.personaId?.nuTelefono,
      nuDni: this.personaId?.nuDNI,
      diPersona: this.personaId?.diPersona,
      tiSexo: this.personaId?.tiSexo,
      idBancoComunal: this.personaId?.idBancoComunal,
    });
  }

  onDeletePersona() {
    this.personaEffect.dispatch(
      deletePersona({ idPersona: this.idPersonaActive })
    );
  }

  onTypeAccion(accion: string) {
    if (accion == 'edit') {
      this.stateButtonsAccion = 2;
      setTimeout(() => {
        this.onEditPersona();
        this.stateForm = !this.stateForm;
      }, 200);
    } else if (accion == 'delete') {
      this.stateButtonsAccion = 3;
      setTimeout(() => {
        this.onDeletePersona();
      }, 200);
    }
  }
}
