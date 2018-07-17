import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {datosDirectorio} from '../../data/data.directorio';
import { HomePage } from '../home/home';
import { CallNumber } from '@ionic-native/call-number';
import { EmailComposer } from '@ionic-native/email-composer';

@Component({
  selector: 'page-directorio',
  templateUrl: 'directorio.html',
})
export class DirectorioPage {
  
  directorio =[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public callNumber: CallNumber, public emailComposer: EmailComposer) {
    this.directorio = datosDirectorio.slice(0);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DirectorioPage');
  }

  homePush() {
    this.navCtrl.setRoot(HomePage);
  }
  
  callPhone(numero) {  
    this.callNumber.callNumber(numero, true)
    .then(() => alert('Launched dialer!'))
    .catch(() => alert('Error launching dialer'));
  }

  sendEmail(emailData) {
    console.log(emailData);
      let email = {
        to: emailData,
        cc: '',
        subject: 'Informacion al estudiante',
        body: 'Buen dia mi nombre es leidy, quiero saber como puedo realizar mis practicas.',
        isHtml: true
        
      };   
      this.emailComposer.open(email);
    }
   
  }