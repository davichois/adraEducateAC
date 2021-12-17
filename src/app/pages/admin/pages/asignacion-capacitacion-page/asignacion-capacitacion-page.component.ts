import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../../state/app.state';
import { getBCLoad } from '../../../../state/actions/bancosComunal.actions';
import { selectBancosComunalReport } from '../../../../state/selectors/bancosComunal.selectors';
import { BancoComunalReport } from '../../../../interfaces/bancoComunal.interface';
import { selectCapacitacionesReport } from '../../../../state/selectors/capacitacion.selectors';
import { getCapacitacionLoad } from '../../../../state/actions/capacitacion.actions';
import { CapacitacionReport } from '../../../../interfaces/capacitacion.interface';
import { BCC } from '../../../../interfaces/bcc.interfaces';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { addBCC } from '../../../../state/actions/bcc.actions';

@Component({
  selector: 'app-asignacion-capacitacion-page',
  templateUrl: './asignacion-capacitacion-page.component.html',
  styleUrls: ['./asignacion-capacitacion-page.component.css'],
})
export class AsignacionCapacitacionPageComponent implements OnInit {
  formCap: FormGroup = new FormGroup({});

  bancoComunalList$: Observable<any[]> = new Observable();
  bancoComunalList: BancoComunalReport[] = [];

  capacitacionList$: Observable<any[]> = new Observable();
  capacitacionList: CapacitacionReport[] = [];

  idCapacitacion: number = 0;
  bccList: BCC[] = [];

  constructor(private asignacionEffect: Store<AppState>) {}

  ngOnInit(): void {
    this.asignacionEffect.dispatch(getBCLoad());
    this.asignacionEffect.dispatch(getCapacitacionLoad());

    this.bancoComunalList$ = this.asignacionEffect.select(
      selectBancosComunalReport
    );
    this.capacitacionList$ = this.asignacionEffect.select(
      selectCapacitacionesReport
    );

    this.bancoComunalList$.subscribe((bancos) => {
      this.bancoComunalList = bancos;
    });
    this.capacitacionList$.subscribe((capacitacion) => {
      this.capacitacionList = capacitacion;
    });

    this.initFormCap();
  }

  initFormCap() {
    this.formCap = new FormGroup({
      idCap: new FormControl('', [Validators.required]),
    });
  }

  onBCCList(bccList: BCC[]) {
    this.bccList = bccList;
  }

  onAssing() {
    this.idCapacitacion = this.formCap.value['idCap'];
    this.bccList;

    for (let cap = 0; cap < this.bccList.length; cap++) {
      const element = this.bccList[cap];

      console.log(element);

      let bccAsigner: BCC = {
        idBanco: +element,
        idCapacitacion: this.idCapacitacion,
      };

      this.asignacionEffect.dispatch(addBCC({ bcc: bccAsigner }));
    }
  }
}
