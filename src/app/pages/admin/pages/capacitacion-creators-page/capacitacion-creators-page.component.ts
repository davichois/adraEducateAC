import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-capacitacion-creators-page',
  templateUrl: './capacitacion-creators-page.component.html',
  styleUrls: ['./capacitacion-creators-page.component.css'],
})
export class CapacitacionCreatorsPageComponent implements OnInit {
  formCapacitacion: FormGroup = new FormGroup({});

  constructor() {}

  ngOnInit(): void {
    this.initFormCapacitacion();
  }

  initFormCapacitacion(): void {
    this.formCapacitacion = new FormGroup({
      noCapacitacion: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      deCapacitacion: new FormControl('', [Validators.required]),
      feInicio: new FormControl('', [Validators.required]),
      feFin: new FormControl('', [Validators.required]),
      tiCapacitacion: new FormControl('', [Validators.required]),
      esCapacitacion: new FormControl('', [Validators.required]),
      imagenURL: new FormControl('', [Validators.required]),
      idCategoria: new FormControl('', [Validators.required]),
      sesiones: new FormArray([]),
    });
  }

  initFormSesiones(): FormGroup {
    return new FormGroup({
      noSesion: new FormControl('', [Validators.required]),
      deSesion: new FormControl('', [Validators.required]),
      feInicio: new FormControl('', [Validators.required]),
      feFin: new FormControl('', [Validators.required]),
    });
  }

  addSesion(): void {
    const refSesiones = this.formCapacitacion.get('sesiones') as FormArray;
    refSesiones.push(this.initFormSesiones());
  }

  getCtrl(key: string, form: FormControl): any {

  }

}
