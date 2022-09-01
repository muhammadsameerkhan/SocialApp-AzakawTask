import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { FetchService } from 'src/app/services/fetch.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  loginForm !: FormGroup;
  passValid = "";

  constructor(
    private router: Router,
    private fetch: FetchService
  ) { }

  ngOnInit(): void {

    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8), Validators.pattern('[0-9]*')])
    })
  }

  checkPassword() {

    let passControl = this.loginForm.controls['password'];
    if (passControl.valid) {
      this.passValid = 'y'
    }
    else {
      this.passValid = 'n'
    }
  }

  submit() {

    if (this.loginForm.valid) {

      let savedPass = '098765'
      let savedUsername = 'sameer'

      if (savedUsername == this.loginForm.controls['username'].value && savedPass == this.loginForm.controls['password'].value) {

        localStorage.setItem('auth', 'true');
        alert('You have successfully login');
        this.router.navigateByUrl('feeds/news');
      }
      else {

        alert('username or password is not valid')
      }
    }
    else {

      if (!this.loginForm.controls['username'].valid) {
        alert('username is not valid');
      }
      else if (!this.loginForm.controls['password'].valid) {
        alert('password is not valid')
      }

    }
  }

}
