import { Component, Input, OnInit } from '@angular/core';
import { Capacitacion } from '../../../../interfaces/capacitacion.interface';

@Component({
  selector: 'app-card-capacitacion-component',
  templateUrl: './card-capacitacion-component.component.html',
  styleUrls: ['./card-capacitacion-component.component.css'],
})
export class CardCapacitacionComponentComponent implements OnInit {
  @Input() capacitacion: Capacitacion = {
    idCapacitacion: 0,
    noCapacitacion: '',
    deCapacitacion: '',
    feInicioCapacitacion: new Date(),
    feFinCapacitacion: new Date(),
    tiCapacitacion: '',
    idCapCategoria: 0,
    totalRecCapacitacion: '',
    esCapacitacion: '',
    fiImageURL: '',
    sesions: [],
  };

  constructor() {}

  ngOnInit(): void {}
}
