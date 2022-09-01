import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FetchService {

  public server = 'https://jsonplaceholder.typicode.com/';

  constructor(
    private http: HttpClient,
  ) { }

  fetchPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.server + 'posts');
  }

  fetchFriendsList(): Observable<any[]> {
    return this.http.get<any[]>(this.server + 'users');
  }
}
