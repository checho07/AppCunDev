import { Component } from '@angular/core';
import { NavController, Content } from 'ionic-angular';
import {IconsHome} from "../../data/data.icons";
import { iconsHome } from "../../interfaces/iconshome.interface";
import { AboutPage } from '../about/about';
import { NoticiasPage } from '../noticias/noticias';
import { NotificacionesPage } from '../notificaciones/notificaciones';
import { UbicacionPage } from '../ubicacion/ubicacion';
import { AprendePage } from '../aprende/aprende';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AboutPage]
  
})
export class HomePage {
  player:any;
  iconshome:iconsHome[] = [];
  
  constructor(private nav: NavController,player:AboutPage ) {
    this.iconshome = IconsHome.slice(0);
    this.player = player;
  }
 pagepush(nombre){
   var paginasMenu = [AboutPage,AprendePage,NoticiasPage,NotificacionesPage,UbicacionPage];
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

