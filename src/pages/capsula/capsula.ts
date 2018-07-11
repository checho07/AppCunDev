import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import {RestVimeoProvider} from '../../providers/rest-vimeo/rest-vimeo'
import { hostViewClassName } from '@angular/compiler';
import {vimeo} from '../../../node_modules/vimeo/lib/vimeo';
import {util} from  '../../../node_modules/util';
import {Vimeo} from '../../../node_modules/vimeo/index.js';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions, CaptureVideoOptions } from '@ionic-native/media-capture';


/**
 * Generated class for the CapsulaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-capsula',
  templateUrl: 'capsula.html',
})
export class CapsulaPage {
  videos: any = [];
  videosRes :any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public rest: RestVimeoProvider, private mediaCapture: MediaCapture) {
 
  }
  vimeoM = '../../../node_modules/vimeo/index.js';
  util   = '../../../node_modules/util/util.js';
   
  ionViewDidLoad() {
    console.log('ionViewDidLoad CapsulaPage');
  }

  //devolverpagina inicio

    homePush(){ this.navCtrl.setRoot(HomePage) }
   
    getVimeo(){
        let count = 1;
        this.rest.requestVimeo()
        .then(res =>{
            console.log(res);
            this.videosRes = res;
           this.videosRes.data.forEach(element => {
                this.videos.push( decodeURI(element.embed.html))
                console.log(this.videos);
                this.embedVideo(element,count)
                count ++;
            });    
        },(err)=>{alert("no hay conexion"+err)});    
    }
    
    embedVideo(video,count) {        
        // This function puts the video on the page
        var  frame =document.createElement('div')
        frame.className = "frameVideo"
        frame.innerHTML =  decodeURI(video.embed.html);
        document.getElementById('myList').appendChild(frame);
    }

    abrirVideo(){
        let options: CaptureVideoOptions = {limit:1,duration:10}
        this.mediaCapture.captureVideo(options)
        .then(
            (data: MediaFile[]) =>  data.forEach(element => {
                this.subirVideo(element.fullPath)
                alert(element.name + "/" +
                element.fullPath +
                element.type );

                
            }),
            (err: CaptureError) => alert(err)
        );        
    }

    subirVideo(path){
        this.rest.uploadVideo(path);
    }
}


    