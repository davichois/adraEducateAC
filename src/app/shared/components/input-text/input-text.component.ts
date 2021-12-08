import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css'],
})
export class InputTextComponent implements OnInit {
  @Input() input: string = '';
  @Output() inputChange = new EventEmitter<string>();

  @Input() placeHolder: string = '';

  constructor() {}

  ngOnInit(): void {}

  updateValue(value: any) {
    const text = value?.target?.value || null;

    this.inputChange.emit(text);
  }
}
