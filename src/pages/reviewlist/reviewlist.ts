import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ReviewlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reviewlist',
  templateUrl: 'reviewlist.html',
})
export class ReviewlistPage {

	lists : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.lists = [{'name':"User Name", 'desc': "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration", 'time': "Date & Time"},
    {'name':"User Name", 'desc': "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration", 'time': "Date & Time"},
    {'name':"User Name", 'desc': "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration", 'time': "Date & Time"}]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReviewlistPage');
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
