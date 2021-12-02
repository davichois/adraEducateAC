import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-page',
  templateUrl: './socio-page.component.html',
  styleUrls: ['./socio-page.component.css'],
})
export class UsuarioPageComponent implements OnInit {
  stateForm: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  onChangeStateForm() {
    this.stateForm = !this.stateForm;
  }
}
