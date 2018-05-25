import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { StreamingMedia, StreamingVideoOptions } from '@ionic-native/streaming-media';
import { HomePage } from '../home/home';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

    url:string;
    stream:any;
    promise:any;
    prueba:any;
    
   constructor(public navCtrl: NavController, public navParams: NavParams) {
     this.url = "http://stream.miradio.in:8553/stream?type=.mp3";
     this.stream = new Audio(this.url);
     this.prueba = false;
   };
   
  // Definición de funcion cun radio

  play() {
    this.stream.play();
      this.promise = new Promise((resolve,reject) => {
        this.stream.addEventListener('playing', () => {
         resolve(true);
         this.prueba = true; 
        });
      this.stream.addEventListener('error', () => {
        reject(false);         
      });
    });     
    return this.promise;
  };
  
  pause() {
    this.stream.pause();
    this.prueba = false; 
  };
  // icono verde cun
  homePush(){
    this.navCtrl.setRoot(HomePage)
  }  
}
