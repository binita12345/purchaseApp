import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'footer',
  templateUrl: 'footer.html'
})
export class FooterComponent {

  text: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Hello FooterComponent Component');
    this.text = 'Hello World';
  }

  statusChanged(event) {

    console.log("event", event.value);
    if(event.value == "home"){
      this.navCtrl.push("HomeappPage");
    } else if(event.value == "shopping"){
      this.navCtrl.push("CartlistPage");
    } else if(event.value == "request"){
      this.navCtrl.push("RequestlistPage");
    } else if(event.value == "profile"){
      this.navCtrl.push("ProfilePage");
    } else if(event.value == "notification"){
      this.navCtrl.push("NotificationPage");
    } else if(event.value == "inquiry"){
      this.navCtrl.push("InquiryproductPage");
    } else if(event.value == "invitation"){
      this.navCtrl.push("InvitefriendsPage");
    } else if(event.value == "changepwd"){
      this.navCtrl.push("ChangepasswordPage");
    } else {
      
    }
  }

  // gotoHome(){
  // 	// let myDiv = document.getElementById('target1');
  	
  // 	this.navCtrl.push("HomeappPage");
  // 	// document.getElementById("target1").style.background = "#000000";
  // }
  // gotoCart(){
  // 	this.navCtrl.push("CartlistPage");
  // 	// document.getElementById("target2").style.background = "#000000";
  // }
  // gotoRequest(){
  // 	this.navCtrl.push("RequestlistPage");
  // 	// document.getElementById("target3").style.background = "#000000";
  // }
  // gotoProfile(){
  // 	this.navCtrl.push("ProfilePage");
  // 	// document.getElementById("target4").style.background = "#000000";
  // }
  // gotoNotification(){
  // 	this.navCtrl.push("NotificationPage");
  // 	// document.getElementById("target5").style.background = "#000000";
  // }
  // gotoInquiryProduct(){
  // 	this.navCtrl.push("InquiryproductPage");
  // 	// document.getElementById("target6").style.background = "#000000";
  // }
  // gotoInviteFriend(){
  // 	this.navCtrl.push("InvitefriendsPage");
  // 	// document.getElementById("target7").style.background = "#000000";
  // }
  // gotoChangePassword(){
  // 	this.navCtrl.push("ChangepasswordPage");
  // 	// document.getElementById("target8").style.background = "#000000";
  // }

  // pushToOther(pageName){
  // 	console.log("pageName", pageName);
  // 	this.navCtrl.push(pageName);
  // }

}
