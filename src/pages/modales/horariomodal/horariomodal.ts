import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the HorariomodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-horariomodal',
  templateUrl: 'horariomodal.html',
})
export class HorariomodalPage {
  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public ViewCtrl:ViewController
  ) {  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HorariomodalPage');
  }
  
  showAlert() {
    const alert = this.alertCtrl.create({      
      title: 'Calculo Multivariado',
      subTitle: 'Fecha inicio: <br> \n  Fecha final:<br> \n Nivel:<br> \nCréditos: <br>\nHoras:\n<br> Cod Programa:<br> \nCod pensum:',
      cssClass: 'alertDetallesA',
      buttons: [
        {
          text: 'OK',
          cssClass: "bOk"
        },
      ],  
    });
    alert.present();
  }
  
  closeModal(){
    this.ViewCtrl.dismiss();
  }

}
