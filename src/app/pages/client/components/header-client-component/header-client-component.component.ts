import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-client-component',
  templateUrl: './header-client-component.component.html',
  styleUrls: ['./header-client-component.component.css'],
})
export class HeaderClientComponentComponent implements OnInit {
  state_option: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onActiveOption() {
    this.state_option = !this.state_option;
  }
}
