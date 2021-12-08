import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-items',
  templateUrl: './table-items.component.html',
})
export class TableItemsComponent implements OnInit {
  @Input() data: any = {};
  objectKeys = Object.keys;

  constructor() {}

  ngOnInit(): void {}
}
