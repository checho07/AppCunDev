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
import { NoticiasPage } from '../pages/noticias/noticias';
import { UbicacionPage } from '../pages/ubicacion/ubicacion';
import { CunPage } from '../pages/cun/cun';
import { DirectorioPage } from '../pages/directorio/directorio';
import { NotificacionesPage } from '../pages/notificaciones/notificaciones';
// import {ScrollingHeaderModule} from 'ionic-scrolling-header';
import { AprendePage } from '../pages/aprende/aprende';
import { NotasPage } from '../pages/notas/notas';
import { CarnePage } from '../pages/carne/carne';
import { CalendarioPage } from '../pages/calendario/calendario';
import { CunVirtualPage } from '../pages/cun-virtual/cun-virtual';
import { HorarioPage } from '../pages/horario/horario';

import { BibliotecaPage } from '../pages/biblioteca/biblioteca';
import { AeiPage } from '../pages/aei/aei';
import { CapsulaPage } from '../pages/capsula/capsula';
import { EmpleoPage } from '../pages/empleo/empleo';
import { DiviertetePage } from '../pages/diviertete/diviertete';
import { FuncionariosPage } from '../pages/funcionarios/funcionarios';
import { VitappPage } from '../pages/vitapp/vitapp';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HideHeaderDirective } from '../Directivas/headerHide';

//import {ScrollingHeaderModule} from 'ionic-scrolling-header';

//import {StreamigMedia } from '@ionic-native/streaming-media'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NotasPage,
    CarnePage,
    CalendarioPage,
    CunVirtualPage,
    HorarioPage,
    AboutPage,   
    BibliotecaPage,
    AprendePage,
    AeiPage,
    CapsulaPage,
    EmpleoPage,
    DiviertetePage,
    FuncionariosPage,
    VitappPage,
    TabsPage,
    NoticiasPage,
    UbicacionPage,
    CunPage,
    DirectorioPage, 
    NotificacionesPage,
    HideHeaderDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      backButtonText: ''
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NotasPage,
    CarnePage,
    CalendarioPage,
    CunVirtualPage,
    HorarioPage,
    AboutPage,   
    BibliotecaPage,
    AprendePage,
    AeiPage,
    CapsulaPage,
    EmpleoPage,
    DiviertetePage,
    FuncionariosPage,
    VitappPage,
    TabsPage,
    NoticiasPage,
    UbicacionPage,
    CunPage,
    DirectorioPage, 
    NotificacionesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
