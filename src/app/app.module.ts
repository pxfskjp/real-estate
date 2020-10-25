import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { RoomsAndBathsPipe } from './rooms-and-baths.pipe';

const config = {
  apiKey: "AIzaSyBfYyX-s0mS6Oi4x2v1puqHuuuRMnBzHhI",
    authDomain: "apartment-audit-72a60.firebaseapp.com",
    databaseURL: "https://apartment-audit-72a60.firebaseio.com",
    projectId: "apartment-audit-72a60",
    storageBucket: "apartment-audit-72a60.appspot.com",
    messagingSenderId: "362830594681",
    appId: "1:362830594681:web:e99a06d1597911e4bb0aa8"
}
@NgModule({
  declarations: [AppComponent, RoomsAndBathsPipe],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, 
    AngularFireModule.initializeApp(config), 
    AngularFireDatabaseModule, 
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
