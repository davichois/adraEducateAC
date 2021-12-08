import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../../interfaces/persona.interface';
import { Capacitacion } from '../../interfaces/capacitacion.interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  @Input() name: string = 'Personas';
  @Input() header: string[] = ['#', '', '', '', '', 'acciones'];
  @Input() dataTable: Observable<any[]> = new Observable();

  constructor() {}

  ngOnInit(): void {}
}
