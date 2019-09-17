import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DataServices}  from '../Servicios/ServiciosFire';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { PerfilPage } from '../pages/perfil/perfil';
import { FeedPage } from '../pages/feed/feed';
import { CrearFeedPage } from '../pages/crear-feed/crear-feed';
import { PostPage } from '../pages/post/post';

export const firebaseConfig = {
  apiKey: "AIzaSyA8PG4n1bh7MLdTFtjVqsaXzp36u-Pdr1c",
  authDomain: "myproyectofirebase-c04a4.firebaseapp.com",
  databaseURL: "https://myproyectofirebase-c04a4.firebaseio.com",
  projectId: "myproyectofirebase-c04a4",
  storageBucket: "",
  messagingSenderId: "606280311083",
  appId: "1:606280311083:web:bcb8cee57c83032e"
  
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PerfilPage,
    FeedPage,
    CrearFeedPage,
    PostPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PerfilPage,
    FeedPage,
    CrearFeedPage,
    PostPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServices
  ]
})
export class AppModule {}
