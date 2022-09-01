import { Component, OnInit } from '@angular/core';
import { user } from '../../../Models/user';
import { FetchService } from '../../../services/fetch.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {

  users: user[] = [];

  constructor(
    private fetch: FetchService
  ) { }

  ngOnInit(): void {

    this.fetch.fetchFriendsList().subscribe((users) => {
      console.log(users);
      this.users = users;
    })
  }

  trackChanges(index: number, element: user): number {
    return element.id
  }

}
