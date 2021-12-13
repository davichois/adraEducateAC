import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../state/app.state';
import { getCapacitacionById } from '../../../../state/selectors/capacitacion.selectors';
import { getCapacitacionLoad } from '../../../../state/actions/capacitacion.actions';
import { Capacitacion } from '../../../../interfaces/capacitacion.interface';

@Component({
  selector: 'app-ver-capacitacion-page',
  templateUrl: './ver-capacitacion-page.component.html',
  styleUrls: ['./ver-capacitacion-page.component.css'],
})
export class VerCapacitacionPageComponent implements OnInit {
  id: number = 0;

  capacitacionById$: Observable<any> = new Observable();
  capacitacionDetails: Capacitacion = {
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

  constructor(
    private detailsEffect: Store<AppState>,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.id = params['id']; // (+) converts string 'id' to a number
    });
  }

  ngOnInit(): void {
    this.detailsEffect.dispatch(getCapacitacionLoad());

    this.capacitacionById$ = this.detailsEffect.select(
      getCapacitacionById(this.id)
    );
    this.capacitacionById$.subscribe((data) => {
      this.capacitacionDetails = data;
    });
  }

  onIdSesion(idSesion: any) {
    console.log(idSesion);
  }
}
