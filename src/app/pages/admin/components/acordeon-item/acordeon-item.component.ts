import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acordeon-item',
  templateUrl: './acordeon-item.component.html',
  styleUrls: ['./acordeon-item.component.css'],
})
export class AcordeonItemComponent implements OnInit {
  @Input() acordeonItem: any = {
    icon: '../../../../../assets/icon/user.svg',
    name: 'Persona',
    route: 'banco',
  };
  objectKeys = Object.keys;

  constructor() {}

  ngOnInit(): void {}
}
