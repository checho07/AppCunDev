import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BibliotecavirtualPage } from '../bibliotecavirtual/bibliotecavirtual';
import { BibliotecatalogoPage } from '../bibliotecatalogo/bibliotecatalogo';

/**
 * Generated class for the BibliotecaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-biblioteca',
  templateUrl: 'biblioteca.html',
})
export class BibliotecaPage {
  bibvir;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibliotecaPage');
  }
    //devolverpagina inicio

  homePush(){
    this.navCtrl.setRoot(HomePage)
  }
  
  bibvirtual(){
    this.navCtrl.push(BibliotecavirtualPage);
  }

  bibcat(){
    this.navCtrl.push(BibliotecatalogoPage);
  }
}
