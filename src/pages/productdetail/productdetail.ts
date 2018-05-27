import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProductdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productdetail',
  templateUrl: 'productdetail.html',
})
export class ProductdetailPage {
	name : any;
	description : any;
	pickup : any;
	dropoff : any;
	time : any;
	amount : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.name = "xyz products";
  	this.description = "There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour";
  	this.pickup = "Maidenhead, SL6 1QZ, United Kingdom";
  	this.dropoff = "Maidenhead, SL6 1QZ, United Kingdom";
  	this.time = "12:12";
  	this.amount = "$5212";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductdetailPage');
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
