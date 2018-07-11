import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the CarnePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-carne',
  templateUrl: 'carne.html',
})
export class CarnePage {
 
  qrdata =[
    {
      nombre:  "Leidy Tatiana Castiblanco Moreno" ,
      cc:  "1024158934",
      carrera:    "Ingenieria en sistemas",
      sede: "Sur",
      rh: "a+"
    }
  ];
 
  
  

  createdCode = null;
  scannedCode = null;
  public data :string = "";

  constructor (public navCtrl: NavController){
  }

  ionViewDidLoad(){
    this.data = this.qrdata[0].nombre + ',' + this.qrdata[0].cc + ',' + this.qrdata[0].carrera + ',' + this.qrdata[0].sede + ',' + this.qrdata[0].rh;
    this.createdCode = this.data;
    console.log(this.data);
  }

    //devolverpagina inicio

  homePush(){
    this.navCtrl.setRoot(HomePage)
    
  }

 
           
    

  // showdata(){
  //   let datosC = {datosC:this.datosC};
  //   console.log(this.datosC);
  // }
}
