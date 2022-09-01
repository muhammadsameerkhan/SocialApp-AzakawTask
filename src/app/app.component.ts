import { Component, OnInit } from '@angular/core';
import { FetchService } from './services/fetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Social App';
  loggedIn: any;

  constructor(
    private fetch: FetchService
  ) { }

  check() {
    this.loggedIn = localStorage.getItem('auth');
    return this.loggedIn;
  }
}
