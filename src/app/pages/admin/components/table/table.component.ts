import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  title: string = 'Socios';
  header: string[] = [
    '#',
    'nombre',
    'dni',
    'banco comunal',
    'avanze',
    'acciones',
  ];

  filtros: string[] = ['Banquito', 'DNI'];
  filtroSelect: string = '';

  constructor() {}

  ngOnInit(): void {}

  onRadioChange(event: any) {
    this.filtroSelect = event.target.value;
  }
}
