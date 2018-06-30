import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { Geolocation } from '@ionic-native/geolocation';
import { Storage } from '@ionic/storage';

import { MainPage } from '../pages/main/main';

@Component({
  templateUrl: 'app.html'
})

// var AdvancedGeolocation:any;
export class MyApp {
  rootPage:any = MainPage;

  currentLat : any;
  currentLng : any;
  watch : any;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private keyboard: Keyboard, private geolocation: Geolocation,
    public storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // statusBar.styleDefault();
      statusBar.styleLightContent();
      statusBar.styleBlackOpaque();
      splashScreen.hide();
        // statusBar.overlaysWebView(true);
        // statusBar.backgroundColorByHexString('#fff');
      this.keyboard.onKeyboardShow().subscribe(() => {
          document.body.classList.add('keyboard-is-open');
      });

      this.keyboard.onKeyboardHide().subscribe(() => {
          document.body.classList.remove('keyboard-is-open');
      });

      this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then((resp) => {
        console.log("getCurrentPosition resp", resp);
        console.log('latitude', resp.coords.latitude);
        console.log('longitude', resp.coords.longitude);

        this.storage.set('currentLatitude', resp.coords.latitude);
        this.storage.set('currentLongitude', resp.coords.longitude);

      }, Error => {
        console.log(Error);
      }).catch(Error => {
        console.log(Error);
      })
    });

    //**For Android**

    // if (platform.is('android')) {
    //   platform.ready().then(() => {
    //     AdvancedGeolocation.start((success) => {
    //       //loading.dismiss();
    //       // this.refreshCurrentUserLocation();
    //       try {
    //         var jsonObject = JSON.parse(success);
    //         console.log("Provider " + JSON.stringify(jsonObject));
    //         switch (jsonObject.provider) {
    //           case "gps":
    //             console.log("setting gps ====<<>>" + jsonObject.latitude);

    //             this.currentLat = jsonObject.latitude;
    //             this.currentLng = jsonObject.longitude;
    //             break;

    //           case "network":
    //             console.log("setting network ====<<>>" + jsonObject.latitude);

    //             this.currentLat = jsonObject.latitude;
    //             this.currentLng = jsonObject.longitude;

    //             break;

    //           case "satellite":
    //             //TODO
    //             break;

    //           case "cell_info":
    //             //TODO
    //             break;

    //           case "cell_location":
    //             //TODO
    //             break;

    //           case "signal_strength":
    //             //TODO
    //             break;
    //         }
    //       }
    //       catch (exc) {
    //         console.log("Invalid JSON: " + exc);
    //       }
    //     },
    //       function (error) {
    //         console.log("ERROR! " + JSON.stringify(error));
    //       },
    //       {
    //         "minTime": 500,         // Min time interval between updates (ms)
    //         "minDistance": 1,       // Min distance between updates (meters)
    //         "noWarn": true,         // Native location provider warnings
    //         "providers": "all",     // Return GPS, NETWORK and CELL locations
    //         "useCache": true,       // Return GPS and NETWORK cached locations
    //         "satelliteData": false, // Return of GPS satellite info
    //         "buffer": false,        // Buffer location data
    //         "bufferSize": 0,         // Max elements in buffer
    //         "signalStrength": false // Return cell signal strength data
    //       });

    //   });
    // } else {

    //   // **For IOS**

    //   let options = {
    //     frequency: 1000,
    //     enableHighAccuracy: false
    //   };

    //   this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
    //     // loading.dismiss();
    //     console.log("current location at login" + JSON.stringify(position));

    //     // Run update inside of Angular's zone
    //     this.zone.run(() => {
    //       this.currentLat = position.coords.latitude;
    //       this.currentLng = position.coords.longitude;
    //     });

    //   });
    // }

  }
}

