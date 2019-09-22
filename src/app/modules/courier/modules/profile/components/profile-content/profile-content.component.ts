import { Component, OnInit } from '@angular/core';
import { CourierProfileOutput, ProfileService } from "courier/modules/profile/services/profile.service";
import { IonRefresher } from "@ionic/angular";

@Component({
  selector: 'app-profile-content',
  templateUrl: './profile-content.component.html',
  styleUrls: ['./profile-content.component.scss'],
})
export class ProfileContentComponent implements OnInit {

  private _profile?: CourierProfileOutput

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.fetchProfileData()
  }

  get profile(): CourierProfileOutput | undefined {
    return this._profile
  }

  fetchProfileData() {
    this.profileService.getProfile()
      .subscribe(output => this._profile = output)
  }

  refreshProfileData(refresher: IonRefresher) {
    refresher.complete()
    this.fetchProfileData()
  }
}
