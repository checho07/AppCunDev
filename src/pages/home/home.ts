import { Component, ViewChild } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import {IconsHome} from "../../data/data.icons";
import { iconsHome } from "../../interfaces/iconshome.interface";
import { PruebaPage } from '../prueba/prueba';
import { AboutPage } from '../about/about';
import { NoticiasPage } from '../noticias/noticias';
import { NotificacionesPage } from '../notificaciones/notificaciones';
import { UbicacionPage } from '../ubicacion/ubicacion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AboutPage]
  
})
export class HomePage {
  player:any;
  iconshome:iconsHome[] = [];


  @ViewChild (Content) content :Content;
  

  constructor(private nav: NavController,player:AboutPage ) {
    this.iconshome = IconsHome.slice(0);
    this.player = player;
  }
 pagepush(nombre){
   var paginasMenu = [AboutPage,NoticiasPage,NotificacionesPage,UbicacionPage];
   for (let i in paginasMenu) {

    if(paginasMenu[i].name === nombre){
      console.log(nombre);
      this.nav.push(paginasMenu[i]);
    }
 }
}
    
 
 play() {
  this.player.play().then(() => {
    console.log('Playing');
  });
}

pause() {
  this.player.pause();
}

}
