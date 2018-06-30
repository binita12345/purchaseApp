import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
/**
 * Generated class for the ChangepasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-changepassword',
  templateUrl: 'changepassword.html',
})
export class ChangepasswordPage {

  oldpwd : any;
  newpwd : any;
  confirmpwd : any;
  id : any;
  error : any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public serviceProvider: ServiceProvider,
    private alertCtrl: AlertController, private loader: Loader) {

    this.storage.get("userData").then(userData => {
      console.log("userData" +JSON.stringify(userData));
      this.id = userData.data.ID;
      console.log("this.id" +this.id);
    });
  }

  changePWD() {
    console.log("change password");
    this.error = '';
    this.loader.show("Please Wait");

    let changedData = {
      "ID": this.id,
      "oldPassword": this.oldpwd,
      "newPassword": this.newpwd
    }

    if(this.newpwd != this.confirmpwd) {
      this.loader.hide();
      this.error = "Password Mismatch";
    } else {
      console.log("changedData" +JSON.stringify(changedData));
      this.serviceProvider.changePasswordService(changedData).then((result) => {
        console.log("result of changed password" +JSON.stringify(result));
        if(result["status"] == 1) {
          this.loader.hide();
          let alert = this.alertCtrl.create({
            subTitle: result["message"],
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  console.log('ok clicked');
                  this.navCtrl.push("SigninPage");
                }
              }
            ]
          });
          alert.present();
          // console.log("lists of product" +JSON.stringify(this.lists));
        } else if(result["status"] == 2) {
          this.loader.hide();
          this.error = result["message"];
        } else {

        }
        // this.getProfileData();
      }, (err) => {
        console.log("err product list" +JSON.stringify(err));
        // Error log
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangepasswordPage');
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
      this.navCtrl.push("InquiryproductdetailPage");
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
  // 	this.navCtrl.push("InquiryproductdetailPage");
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

}
