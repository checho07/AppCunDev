import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { InAppBrowser } from '@ionic-native/in-app-browser';
 import { Device } from '@ionic-native/device';
 import { AppAvailability } from '@ionic-native/app-availability';


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
   
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public iap:InAppBrowser,private device: Device,public AppAvailability:AppAvailability ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DiviertetePage');
  }
  //devolverpagina inicio
  homePush(){
    this.navCtrl.setRoot(HomePage)
  }
 
  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
  
    let app:string;

  	if (this.device.platform === 'iOS') {
  		app = iosSchemaName;
  	} else if (this.device.platform === 'Android') {
  		app = androidPackageName;
  	} else {
      let browser = new InAppBrowser();
      browser.create(httpUrl + username, '_system');
      return;
  	}
  
    this.AppAvailability.check(androidPackageName).then(
      () => { // success callback
        let browser = new InAppBrowser();
        browser.create(appUrl + username, '_system')
      },
      () => { // error callback
        let browser = new InAppBrowser();
        browser.create(httpUrl, '_system')
      }
    );
  }

  openArcunoid(username: string) {
  	this.launchExternalApp('arCunoid://', 'com.cun.arCunoid', 'com.cun.arcunoid', 'https://play.google.com/store/apps/details?id=com.cun.arcunoid', username);
  }
}
