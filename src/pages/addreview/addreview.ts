import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addreview',
  templateUrl: 'addreview.html',
})
export class AddreviewPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddreviewPage');
  }

  submit(){
  	this.navCtrl.pop();
  }

  gotoHome(){
  	// let myDiv = document.getElementById('target1');
  	
  	this.navCtrl.push("HomeappPage");
  	// document.getElementById("target1").style.background = "#000000";
  }
  gotoCart(){
  	this.navCtrl.push("CartlistPage");
  	// document.getElementById("target2").style.background = "#000000";
  }
  gotoRequest(){
  	this.navCtrl.push("RequestlistPage");
  	// document.getElementById("target3").style.background = "#000000";
  }
  gotoProfile(){
  	this.navCtrl.push("ProfilePage");
  	// document.getElementById("target4").style.background = "#000000";
  }
  gotoNotification(){
  	this.navCtrl.push("NotificationPage");
  	// document.getElementById("target5").style.background = "#000000";
  }
  gotoInquiryProduct(){
  	this.navCtrl.push("InquiryproductPage");
  	// document.getElementById("target6").style.background = "#000000";
  }
  gotoInviteFriend(){
  	this.navCtrl.push("InvitefriendsPage");
  	// document.getElementById("target7").style.background = "#000000";
  }
  gotoChangePassword(){
  	this.navCtrl.push("ChangepasswordPage");
  	// document.getElementById("target8").style.background = "#000000";
  }

}
