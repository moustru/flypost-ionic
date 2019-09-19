import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <ion-header>
        <app-logout></app-logout>
    </ion-header>
    <ion-content>
        Some content
    </ion-content>
  `
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
