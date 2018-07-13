import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the BibliotecatalogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bibliotecatalogo',
  templateUrl: 'bibliotecatalogo.html',
})
export class BibliotecatalogoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibliotecatalogoPage');
  }
  
  homePush(){
    this.navCtrl.setRoot(HomePage)
  }
}
