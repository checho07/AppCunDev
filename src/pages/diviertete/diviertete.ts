import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the DiviertetePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-diviertete',
  templateUrl: 'diviertete.html',
})
export class DiviertetePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiviertetePage');
  }
  //devolverpagina inicio
  homePush(){
    this.navCtrl.setRoot(HomePage)
  }

}
