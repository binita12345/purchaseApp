import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InvitefriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invitefriends',
  templateUrl: 'invitefriends.html',
})
export class InvitefriendsPage {
  lists : any = [];
  check : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lists = [{'name':"UIDAI", 'num': "+91 98297 99298"},
    {'name':"Distress Number", 'num': "112"},
    {'name':"Jeks parser", 'num': "+91 98297 99298"},
    {'name':"Jeks parser", 'num': "+91 98297 99298"},
    {'name':"Catch a Song", 'num': "+9157373"}]
  }
  checkList(list){
    console.log("list", list);
    if(list){
      this.check = true; 
    } else {
      this.check = false; 
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitefriendsPage');
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
