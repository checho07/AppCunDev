import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { HomePage } from '../home/home';
import {datosHorario} from '../../data/dataHorario';
import {horarioC} from '../../interfaces/Horario.interface';
import {HorariomodalPage} from '../modales/horariomodal/horariomodal';



/**
 * Generated class for the HorarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-horario',
  templateUrl: 'horario.html',
})
export class HorarioPage {
  
  Horario:horarioC[] =[];
  virtual:boolean;
  cronograma: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
    this.Horario = datosHorario.slice(0);
    this.virtual=true;
  }

  ionViewDidLoad() {  
    console.log('ionViewDidLoad HorarioPage');
  }
    //devolverpagina inicio

  homePush() {
    this.navCtrl.setRoot(HomePage)
  }

  /*showModal() {
      let modalH = this.modalCtrl.create(HorariomodalPage);
      modalH.present();
  }*/
    
  showModal() {
    const modal = this.modalCtrl.create(HorariomodalPage);
    modal.present();
  }


 /* showModal(obj) {
    if (obj !=null) {

      this.cronograma;
      let modalH = this.modalCtrl.create(HorariomodalPage);
      modalH.present();
    } else {
      console.log('Sus Materias aún no han sido cargadas');
    }   
  }*/

}
