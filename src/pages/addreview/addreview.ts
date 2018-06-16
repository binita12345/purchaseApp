import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
	// public addReviewFrom:FormGroup;
  ratings : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	// this.addReviewFrom = formBuilder.group({
   //    username: [''],
   //    productname: [''],
   //    comments: ['']
   //  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddreviewPage');
  }

  submit(){
  	this.navCtrl.pop();
  }
  onModelChange(event){
  	console.log("event star" +JSON.stringify(event));
    this.ratings = event;
    // console.log("event value..." +JSON.stringify(event.value));
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
