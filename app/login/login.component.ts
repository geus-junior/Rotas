import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
  }

  login() {
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/']);
  }

}