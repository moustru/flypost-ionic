import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-courier',
  templateUrl: `courier.component.html`
})
export class CourierComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.navigate(['courier', 'order'])
  }
}
