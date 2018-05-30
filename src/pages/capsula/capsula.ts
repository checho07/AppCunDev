import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the CapsulaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-capsula',
  templateUrl: 'capsula.html',
})
export class CapsulaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsulaPage');
  }
  //devolverpagina inicio

  homePush(){
    this.navCtrl.setRoot(HomePage)
  }
   
}
