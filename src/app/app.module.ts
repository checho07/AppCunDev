import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
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
import { HttpClientModule } from '@angular/common/http';
import { BibliotecaPage } from '../pages/biblioteca/biblioteca';
import { AeiPage } from '../pages/aei/aei';
import { CapsulaPage } from '../pages/capsula/capsula';
import { EmpleoPage } from '../pages/empleo/empleo';
import { DiviertetePage } from '../pages/diviertete/diviertete';
import { FuncionariosPage } from '../pages/funcionarios/funcionarios';
import { VitappPage } from '../pages/vitapp/vitapp';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { HideHeaderDirective } from '../Directivas/headerHide';
import { RestVimeoProvider } from '../providers/rest-vimeo/rest-vimeo';
import { BienvenidaPage } from '../pages/bienvenida/bienvenida';
import { MediaCapture} from '@ionic-native/media-capture';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { HorariomodalPage} from '../pages/modales/horariomodal/horariomodal';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Device } from '@ionic-native/device';
import { AppAvailability } from '@ionic-native/app-availability';
import { BibliotecatalogoPage } from '../pages/bibliotecatalogo/bibliotecatalogo';
import { BibliotecavirtualPage } from '../pages/bibliotecavirtual/bibliotecavirtual';
import { CallDirectory } from '@ionic-native/call-directory';

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
    HideHeaderDirective,
    BienvenidaPage,
    HorariomodalPage,
    BibliotecatalogoPage,
    BibliotecavirtualPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxQRCodeModule,
    CallDirectory,
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
    NotificacionesPage,
    BienvenidaPage,
    HorariomodalPage,
    BibliotecatalogoPage,
    BibliotecavirtualPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    Device,
    AppAvailability,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestVimeoProvider, 
    MediaCapture, 
    InAppBrowser

  ]
})
export class AppModule {}
