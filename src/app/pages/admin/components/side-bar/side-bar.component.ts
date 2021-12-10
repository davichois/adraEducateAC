import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SideBarComponent implements OnInit {
  acordeonItemListEC: any[] = [
    {
      icon: '../../../../../assets/icon/user.svg',
      name: 'Persona',
      route: 'socio',
    },
    {
      icon: '../../../../../assets/icon/repeat.svg',
      name: 'Asignacion de capacitacion',
      route: 'banco',
    },
    {
      icon: '../../../../../assets/icon/credit-card-black.svg',
      name: 'Banco Comunal',
      route: 'banco',
    },
    {
      icon: '../../../../../assets/icon/copy.svg',
      name: 'Capacitacion',
      route: 'capacitacion',
    },
    {
      icon: '../../../../../assets/icon/bookmark.svg',
      name: 'Categoria',
      route: 'banco',
    },
  ];

  acordeonItemListES: any[] = [
    {
      icon: '../../../../../assets/icon/message-circle.svg',
      name: 'Pedidos de oracion',
      route: 'pedidoOracion',
    },
    {
      icon: '../../../../../assets/icon/file.svg',
      name: 'Descargar Asistencia',
      route: 'banco',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
