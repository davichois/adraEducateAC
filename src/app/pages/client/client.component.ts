import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
})
export class ClientComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onAdmin() {
    this.router.navigate(['./admin']);
  }
}
