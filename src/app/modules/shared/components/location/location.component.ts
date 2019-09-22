import { Component, OnInit } from '@angular/core';
import { LocationService } from "shared/services/location.service";
import { FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {

  private _languages = Array<string>()
  private _languageControl = new FormControl()

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this._languages = this.locationService.supportedLanguages
    this._languageControl.setValue(this.locationService.currentLanguage)

    this._languageControl.valueChanges
      .subscribe(lang => {
        this.locationService.setLanguage(lang)
        document.location!.reload()
      })
  }

  get languages(): string[] {
    return this._languages
  }

  get languageControl(): FormControl {
    return this._languageControl
  }

  changeLanguage(lang: string): void {
    this.locationService.setLanguage(lang)
  }
}
