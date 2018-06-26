import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the InquiryproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inquiryproduct',
  templateUrl: 'inquiryproduct.html',
})
export class InquiryproductPage {

  name : any;
  email : any;
  subjects : any;
  inquiries : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get("userData").then(userData => {
      console.log("inquiry userData" +JSON.stringify(userData));
      this.name = userData.data.name;
      this.email = userData.data.email;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InquiryproductPage');
  }
  submit(){
    // this.navCtrl.push("HomeappPage");
    console.log("inquiry name" +this.name);
    console.log("inquiry email" +this.email);
    console.log("inquiry subjects" +this.subjects);
    console.log("inquiry inquiries" +this.inquiries);

    let inquiryObj = {
      
    }
  }  

}
