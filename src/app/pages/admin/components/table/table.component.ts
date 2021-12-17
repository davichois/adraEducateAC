import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  @Input() name: string = 'Personas';
  @Input() header: string[] = ['#', '', '', '', '', 'acciones'];
  @Input() dataTable: Observable<any[]> = new Observable();

  @Output() itemOut = new EventEmitter<any>();
  @Output() accionOut = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onData(data: any) {
    this.itemOut.emit(data);
  }

  onAccion(accion: any) {
    this.accionOut.emit(accion);
  }
}
