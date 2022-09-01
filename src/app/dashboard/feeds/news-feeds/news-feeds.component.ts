import { Component, OnInit } from '@angular/core';
import { post } from '../../../Models/post';
import { FetchService } from '../../../services/fetch.service';

@Component({
  selector: 'app-news-feeds',
  templateUrl: './news-feeds.component.html',
  styleUrls: ['./news-feeds.component.css']
})
export class NewsFeedsComponent implements OnInit {

  posts: post[] = [];

  constructor(
    private fetch: FetchService
  ) { }

  ngOnInit(): void {

    this.fetch.fetchPosts().subscribe((resp) => {
      this.posts = resp;
    })
  }

  trackChanges(index: number, element: post): number {
    return element.userId
  }

}
