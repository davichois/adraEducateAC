import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css'],
})
export class AcordeonComponent implements OnInit {
  @Input() title: string = '';
  @Input() acordeonItem: any[] = [];

  state_acordeon: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onActiveAcordeon() {
    this.state_acordeon = !this.state_acordeon;
  }
}
