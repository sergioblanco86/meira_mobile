import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  url : string = 'http://scpt.barranquilla.gov.co:8079/cdc-v2';

  constructor(public navCtrl: NavController, private iab: InAppBrowser) {
    
  }

  ngOnInit() {
    setTimeout(() => {
      this.openWebPage(this.url);
    }, 1000);
    
  }

  openWebPage(url : string){
    const options: InAppBrowserOptions = {
      zoom : 'no',
      location: 'no',
      hidenavigationbuttons: 'yes',
      hideurlbar: 'yes',
      toolbar : 'no',
      fullscreen : 'yes',
      useWideViewPort : 'yes',
      clearsessioncache: 'yes',
      clearcache: 'yes'
    }
    this.iab.create(url,'_blank',options);
  }

}
