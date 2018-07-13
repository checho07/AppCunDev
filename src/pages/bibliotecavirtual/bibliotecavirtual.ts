import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the BibliotecavirtualPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bibliotecavirtual',
  templateUrl: 'bibliotecavirtual.html',
})
export class BibliotecavirtualPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BibliotecavirtualPage');
  }

  homePush(){
    this.navCtrl.setRoot(HomePage)
  }
  

}
