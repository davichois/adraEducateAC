import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../state/app.state';
import { getCapacitacionLoad } from '../../../../state/actions/capacitacion.actions';
import { selectCapacitaciones } from '../../../../state/selectors/capacitacion.selectors';
import { Router } from '@angular/router';

@Component({
  selector: 'app-capacitacion-page',
  templateUrl: './capacitacion-page.component.html',
  styleUrls: ['./capacitacion-page.component.css'],
})
export class CapacitacionPageComponent implements OnInit {
  header: string[] = [
    '#',
    'nombre',
    'categoria',
    'tipo',
    'nº seciones',
    'acciones',
  ];
  capacitacionList$: Observable<any[]> = new Observable();

  constructor(private capacitacionEffect: Store<AppState>) {}

  ngOnInit(): void {
    this.capacitacionEffect.dispatch(getCapacitacionLoad());
    this.capacitacionList$ =
      this.capacitacionEffect.select(selectCapacitaciones);
  }
}
