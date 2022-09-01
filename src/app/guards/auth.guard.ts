import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { FetchService } from '../services/fetch.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private fetch: FetchService,
    private router: Router
  ) { }

  canActivate(): boolean {

    let val = localStorage.getItem('auth');
    if (val != 'true') {
      this.router.navigateByUrl('login/sign-in');
    }
    return val == 'true' ? true : false;
  }

}
