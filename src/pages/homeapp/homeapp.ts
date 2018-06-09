import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the HomeappPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homeapp',
  templateUrl: 'homeapp.html',
})
export class HomeappPage {
  customerLogin : any;
  supplierLogin : any;
  forUserContent : any;
  forSupplierContent : any;
  forBothContent : any;
  bothLogin : any;
  userType: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {

    this.storage.get("userData").then(userData => {
      // console.log("userData" +JSON.stringify(userData));
      this.userType = userData.data.user_type;
      if (this.userType == "CUSTOMER") {
        this.forUserContent = true;
        this.forSupplierContent =false;
        this.forBothContent =false;
      } else if (this.userType == "SUPPLIER") {
        this.forUserContent = false;
        this.forSupplierContent =true;
        this.forBothContent =false;
      } else if (this.userType == "USER") {
        this.forUserContent = false;
        this.forSupplierContent =false;
        this.forBothContent =true;
      } else {
      }
    });
    // this.storage.get("user_type").then(getUserType => {
    //   console.log("getUserType" +JSON.stringify(getUserType));
    //   this.userType = getUserType;
    //   if (this.userType == "customer") {
    //     this.forUserContent = true;
    //     this.forSupplierContent =false;
    //     this.forBothContent =false;
    //   } else if (this.userType == "supplier") {
    //     this.forUserContent = false;
    //     this.forSupplierContent =true;
    //     this.forBothContent =false;
    //   } else if (this.userType == "both") {
    //     this.forUserContent = false;
    //     this.forSupplierContent =false;
    //     this.forBothContent =true;
    //   } else {
    //   }
    // });
  }

  showreviewlist() {
    this.navCtrl.push("ReviewlistPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeappPage');
  }
  addProduct(){
    this.navCtrl.push("AddproductPage");
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
