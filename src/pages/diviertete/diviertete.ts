import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { InAppBrowser } from '@ionic-native/in-app-browser';

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
   
  nav:string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, private iap:InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiviertetePage');
  }
  //devolverpagina inicio
  homePush(){
    this.navCtrl.setRoot(HomePage)
  }
  
  openLink(){
    this.iap.create("https://play.google.com/store/apps/details?id=com.cun.arcunoid");
  }
}
