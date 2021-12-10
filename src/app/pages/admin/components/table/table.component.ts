import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

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
