import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the AprendePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-aprende',
  templateUrl: 'aprende.html',
})
export class AprendePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  homePush(){
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AprendePage');
  }

}
