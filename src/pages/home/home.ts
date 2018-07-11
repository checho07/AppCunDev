import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { NavController, Content } from 'ionic-angular';
import {IconsHome} from "../../data/data.icons";
import { iconsHome } from "../../interfaces/iconshome.interface";
import { AboutPage } from '../about/about';
import { NoticiasPage } from '../noticias/noticias';
import { NotificacionesPage } from '../notificaciones/notificaciones';
import { UbicacionPage } from '../ubicacion/ubicacion';
import { AprendePage } from '../aprende/aprende';
import { CunPage } from '../cun/cun';
import { DirectorioPage } from '../directorio/directorio';
import { NotasPage } from '../notas/notas';
import { CarnePage } from '../carne/carne';
import { CalendarioPage } from '../calendario/calendario';
import { CunVirtualPage } from '../cun-virtual/cun-virtual';
import { HorarioPage } from '../horario/horario';
import { BibliotecaPage } from '../biblioteca/biblioteca';
import { AeiPage } from '../aei/aei';
import { CapsulaPage } from '../capsula/capsula';
import { EmpleoPage } from '../empleo/empleo';
import { DiviertetePage } from '../diviertete/diviertete';
import { FuncionariosPage } from '../funcionarios/funcionarios';
import { VitappPage } from '../vitapp/vitapp';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import {BienvenidaPage} from '../bienvenida/bienvenida';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AboutPage]
  
})
export class HomePage {
 
  player:any;
  iconshome:iconsHome[] = [];
  platform :any
 
  
  constructor(private nav: NavController,player:AboutPage, screenOrientation: ScreenOrientation, platform:Platform ) {
    this.iconshome = IconsHome.slice(0);
    this.player = player;
    //orientación de pantalla
    screenOrientation.lock('portrait').then(() => {
      console.log('locked');
    }).catch(()=>console.log('error'));
   
  }
  
  // función para agragar paginas dentro del content

   pagepush(nombre){
    var paginasMenu =  [
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
                        VitappPage
                      ];
    for (let i in paginasMenu) {
  
      if(paginasMenu[i].name === nombre){
        console.log(nombre);
        this.nav.push(paginasMenu[i]);
      }
    }
  }

  // agragar paginas al footer 

  noticiasPush(){
    this.nav.push(NoticiasPage);
  }
  
  sedesPush(){
    this.nav.push(UbicacionPage);
  }
  
  cunPush(){
    this.nav.push(CunPage);
  }
  
  directorioPush(){
    this.nav.push(DirectorioPage);
  }
  
  notificacionesPush(){
    this.nav.push(NotificacionesPage);
  }
  
  //función para cun media radio

  play() {
    this.player.play().then(() => {
      console.log('Playing');
    });
  }
  pause() {
    this.player.pause();
  }
}

