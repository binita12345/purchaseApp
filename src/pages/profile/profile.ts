import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  userProfileData : any;
  name : any;
  email : any;
  mobile : any;
  gender : any;
  userImage : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.storage.get("userSignupData").then((getUserSignupData) => {
      // console.log("getUserSignupData" +JSON.stringify(getUserSignupData));
      this.userProfileData = getUserSignupData;
      console.log("this.userProfileData" +JSON.stringify(this.userProfileData));

      this.name = this.userProfileData.data.name;
      this.email = this.userProfileData.data.email;
      this.mobile = this.userProfileData.data.mobile;
      this.gender = this.userProfileData.data.gender;
      this.userImage = this.userProfileData.data.userImage;
    });
  }  

  editProfile(){
    this.navCtrl.push("ProfilePage");
  }

  logout(){
    this.navCtrl.push("SigninPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
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
