import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {datosDirectorio} from '../../data/data.directorio';
import { EmailComposer } from '@ionic-native/email-composer';
import { HomePage } from '../home/home';
import { CallDirectory } from '@ionic-native/call-directory';



/**
 * Generated class for the DirectorioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-directorio',
  templateUrl: 'directorio.html',
})
export class DirectorioPage {
  
  directorio =[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public emailComposer: EmailComposer, public callDirectory: CallDirectory) {
    this.directorio = datosDirectorio.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectorioPage');
  }

  homePush(){
    this.navCtrl.setRoot(HomePage);
  }
}
