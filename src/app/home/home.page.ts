import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateHelper() {
    this.router.navigate(['helper-tabs']);
  }

  navigateProvider() {
    this.router.navigate(['provider-tabs']);
  }
}
