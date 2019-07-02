import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import axios from 'axios';
import API from './utils/settings';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})

export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    axios.interceptors.request.use((config) => {
      const token = localStorage.getItem('user-token')
      const url = config.url.replace(`${API.DOMAIN}`, '')
      config.baseURL = API.DOMAIN
    
      if (token !== null && url !== '/token') {
        config.headers.Authorization = 'Bearer ' + token
        config.headers.Accept = 'application/json'
      } else if (token === null && url !== '/token') {
        this.router.navigateByUrl('/auth')
      }
      return config
    }, err => {
      return Promise.reject(err)
    })
      
    axios.interceptors.response.use((response) => {
      return response
    }, err => {
      let status = err.response.status
      let type = err.response.data.type

      if (status === 401 && type === 'JWT_TOKEN_IS_EXPIRED') {
        this.router.navigateByUrl('/auth')
        this.removeAuthorization()
      } else if (status === 400 && type === 'UserBlockedException') {
        this.router.navigateByUrl('/block')
        this.removeAuthorization()
      }

      return Promise.reject(err.response)
    })
  }

  removeAuthorization(): void {
    localStorage.removeItem('user-token')
    localStorage.removeItem('user-roles')
    localStorage.removeItem('user-id')
  }
}
