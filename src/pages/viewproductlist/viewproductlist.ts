import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ViewproductlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewproductlist',
  templateUrl: 'viewproductlist.html',
})
export class ViewproductlistPage {

	productdetail : any = [];
  products : any;
  beforeAccept : boolean = false;
  afterAccept : boolean = false;
  withoutAccept : boolean = false;
  withAccept : boolean = false;
  // acceptStatus : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  	this.products = navParams.get('productdetail');
    // console.log("viewlist this.products" +JSON.stringify(this.products));
    this.productdetail = this.products.productDetails;
    // console.log("this.productdetail" +JSON.stringify(this.productdetail));

    this.storage.get("beforeAccept").then(beforeAccept => {
      this.withoutAccept = beforeAccept;
      // console.log("this.withoutAccept" +this.withoutAccept);
      if(this.withoutAccept == true) {
        this.beforeAccept = true;
        this.afterAccept = false;
      } else if(this.withoutAccept == null) {
        this.beforeAccept = false;
        this.afterAccept = true;
      }
    });

    this.storage.get("afterAccept").then(afterAccept => {
      this.withAccept = afterAccept;
      // console.log("this.withAccept" +this.withAccept);
      if(this.withAccept == true) {
        this.afterAccept = true;
        this.beforeAccept = false;
      } else if(this.withAccept == null) {
        this.afterAccept = false;
        this.beforeAccept = true;
      }
    });
    // this.beforeAccept = navParams.get('beforeAccept');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewproductlistPage');
  }

  inquiryProduct(){
    this.navCtrl.push("InquiryproductPage");
  }

  gotoHome(){
  	this.navCtrl.push("HomeappPage");
  }
  gotoCart(){
  	this.navCtrl.push("CartlistPage");
  }
  gotoRequest(){
  	this.navCtrl.push("RequestlistPage");
  }
  gotoProfile(){
  	this.navCtrl.push("ProfilePage");
  }
  gotoNotification(){
  	this.navCtrl.push("NotificationPage");
  }
  gotoInquiryProduct(){
  	this.navCtrl.push("InquiryproductdetailPage");
  }
  gotoInviteFriend(){
  	this.navCtrl.push("InvitefriendsPage");
  }
  gotoChangePassword(){
  	this.navCtrl.push("ChangepasswordPage");
  }

}
