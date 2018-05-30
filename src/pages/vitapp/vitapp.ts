import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the VitappPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-vitapp',
  templateUrl: 'vitapp.html',
})
export class VitappPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VitappPage');
  }
  //devolverpagina inicio

  homePush(){
    this.navCtrl.setRoot(HomePage)
  }
  
}
