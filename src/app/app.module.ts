import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HTTP } from '@ionic-native/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { Keyboard } from '@ionic-native/keyboard';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Device } from '@ionic-native/device';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import * as _ from 'lodash';
import { SearchPipe } from '../pipes/search/search';
// import { SortPipe } from '../pipes/sort/sort';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
// import { InvitefriendsPageModule } from '../pages/invitefriends/invitefriends.module';

// import { HttpClientModule } from "@angular/common/http";
import { Dialogs } from '@ionic-native/dialogs';
import { Loader } from '../providers/loader/loader';

import { HeaderComponent } from '../components/header/header';
import { FooterComponent } from '../components/footer/footer'

import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { Ionic2RatingModule } from 'ionic2-rating';
import { ServiceProvider } from '../providers/service/service';
// import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';
import { Network } from '@ionic-native/network';
// import { PipesModule } from '../pipes/pipes.module';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
    SearchPipe,
    // SortPipe
  ],
  imports: [
    BrowserModule,
    // PipesModule,
    // InvitefriendsPageModule,
    // HttpClientModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
          apiKey: "AIzaSyDfFWPRgehrmHkdwL1PLAWRVJPmfFk3b30",
          libraries: ["places"]
    }),
    IonicStorageModule.forRoot(),
    Ionic2RatingModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    Keyboard,
    Camera,
    Dialogs,
    Loader,
    Device,
    Facebook,
    GooglePlus,
    Geolocation,
    NativeGeocoder,
    HTTP,
    // cordovaSqlitePlugin,
    Network
    // SearchPipe
  ]
})
export class AppModule {}
