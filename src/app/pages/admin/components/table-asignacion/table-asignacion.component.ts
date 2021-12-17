import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BancoComunalReport } from '../../../../interfaces/bancoComunal.interface';

@Component({
  selector: 'app-table-asignacion',
  templateUrl: './table-asignacion.component.html',
  styleUrls: ['./table-asignacion.component.css'],
})
export class TableAsignacionComponent implements OnInit {
  bancosComunalSelect: number[] = [];

  @Input() bancoComunalList: BancoComunalReport[] = [];
  @Output() bcOutSelect = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onChange(idBC: number, event: any) {
    if (event.target.checked) {
      this.bancosComunalSelect.push(idBC);
    } else {
      let indexE = this.bancosComunalSelect.indexOf(idBC);
      if (indexE > -1) {
        this.bancosComunalSelect.splice(indexE, 1);
      }
    }

    this.bcOutSelect.emit(this.bancosComunalSelect);
  }
}
