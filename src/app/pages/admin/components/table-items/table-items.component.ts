import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-items',
  templateUrl: './table-items.component.html',
})
export class TableItemsComponent implements OnInit {
  @Input() data: any = {};
  objectKeys = Object.keys;

  @Output() typeButton = new EventEmitter<string>();
  @Output() dataItem = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onEditItem() {
    this.typeButton.emit('edit');
    this.dataItem.emit(this.data);
  }

  onDeleteItem() {
    this.typeButton.emit('delete');
    this.dataItem.emit(this.data);
  }
}
