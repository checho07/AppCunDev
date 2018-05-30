import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the UbicacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ubicacion',
  templateUrl: 'ubicacion.html',
})
export class UbicacionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UbicacionPage');
  }
    //devolverpagina inicio
    homePush(){
      this.navCtrl.setRoot(HomePage)
    }

}
