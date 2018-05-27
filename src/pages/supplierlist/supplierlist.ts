import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SupplierlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supplierlist',
  templateUrl: 'supplierlist.html',
})
export class SupplierlistPage {

	lists : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.lists = [{'image': "assets/imgs/user.png", 'desc': "Nevine Acotanza"},
    {'image': "assets/imgs/user.png", 'desc': "Oluwarotimi Adesina"},
    {'image': "assets/imgs/user.png", 'desc': "Fabrizio Cedrone"}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupplierlistPage');
  }

  gotoOrderProduct(){
  	this.navCtrl.push("OrderproductPage");
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
  gotoSupplier(){
  	this.navCtrl.push("SupplierlistPage");
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
  	this.navCtrl.push("InquiryproductdetailPage");
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
