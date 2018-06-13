import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
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

// import { HttpClientModule } from "@angular/common/http";
import { Dialogs } from '@ionic-native/dialogs';
import { Loader } from '../providers/loader/loader';

import { HeaderComponent } from '../components/header/header';
import { FooterComponent } from '../components/footer/footer'

import { MyApp } from './app.component';
import { MainPage } from '../pages/main/main';
import { Ionic2RatingModule } from 'ionic2-rating';
import { ServiceProvider } from '../providers/service/service';

@NgModule({
  declarations: [
    MyApp,
    MainPage,
  ],
  imports: [
    BrowserModule,
    // HttpClientModule,
    IonicModule.forRoot(MyApp),
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
    GooglePlus
  ]
})
export class AppModule {}
