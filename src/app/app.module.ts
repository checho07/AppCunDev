import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PruebaPage } from '../pages/prueba/prueba';
import { NoticiasPage } from '../pages/noticias/noticias';
import { UbicacionPage } from '../pages/ubicacion/ubicacion';
import { CunPage } from '../pages/cun/cun';
import { DirectorioPage } from '../pages/directorio/directorio';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
//import {StreamigMedia } from '@ionic-native/streaming-media'

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PruebaPage,
    NoticiasPage,
    UbicacionPage,
    CunPage,
    DirectorioPage, 
    NotificacionesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PruebaPage,
    NoticiasPage,
    UbicacionPage,
    CunPage,
    DirectorioPage, 
    NotificacionesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
