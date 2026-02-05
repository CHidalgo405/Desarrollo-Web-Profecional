import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-404',
  imports: [],
  templateUrl: './error-404.html',
  styleUrl: './error-404.css',
})
export class Error404 {

  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/']);
  }

}