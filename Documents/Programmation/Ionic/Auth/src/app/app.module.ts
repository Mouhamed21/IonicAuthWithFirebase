import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AngularFireAuthModule } from '@angular/fire/auth';
export const firebaseConfig = {
  apiKey: 'AIzaSyDuc9RAeJTg08g9MsXRw-n8EZXtxd8nT-k',
  authDomain: 'auth-a212d.firebaseapp.com',
  databaseURL: 'https://auth-a212d.firebaseio.com',
  projectId: 'auth-a212d',
  storageBucket: 'auth-a212d.appspot.com',
  messagingSenderId: '144388233033',
  appId: '1:144388233033:web:2ac0d0fb185ec4ca36ec98',
  measurementId: 'G-XWE76WQTG7'
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule, AngularFireDatabaseModule, AngularFireStorageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

