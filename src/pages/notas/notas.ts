import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

/**
 * Generated class for the NotasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
  
})
export class NotasPage {
  corte1: string = '';
  constructor(public navCtrl: NavController, public navParams: NavParams, screenOrientation: ScreenOrientation) {
    // activación de orientación de pantalla
    screenOrientation.unlock();
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad NotasPage');
  }
  //devolverpagina inicio
  homePush(){
    this.navCtrl.setRoot(HomePage)
  }
  // array  de notas 
  notas = [
    {
      asignatura:'Calculo',c1:35,c2:40,c3:50
    },
    {
      asignatura:'Base de Datos',c1:30,c2:42,c3:10
    },
    {
      asignatura:'Programacion Web',c1:25,c2:30,c3:40
    },
    {
      asignatura:'Programacion f',c1:25,c2:30,c3:40
    },
    {
      asignatura:'Administracion de base de datos ',c1:25,c2:30,c3:40
    },
    {
      asignatura:'Refinamiento de software',c1:25,c2:30,c3:40
    },
    {
      asignatura:'Proeyecto de grado I',c1:25,c2:30,c3:40
    }
  ]

//   calcularNota(any){
//     console.log();
//  this.corte1.setValue()
      
 // }

}
