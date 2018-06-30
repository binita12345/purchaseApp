import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
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
  id : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public serviceProvider: ServiceProvider,
    private loader: Loader, private alertCtrl: AlertController) {

    this.storage.get("userData").then(userData => {
      this.id = userData.data.ID;
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
    this.loader.show("Please Wait");
    let getReviewObj = {
      "ID": this.id 
    }

    this.serviceProvider.ReviewListData(getReviewObj).then((result) => {
      console.log("result ReviewListData" +JSON.stringify(result));
      if(result["status"] == 1) {
        this.loader.hide();
        console.log("review result" +JSON.stringify(result["data"]));
        this.storage.set('reviewData', result["data"]);
        this.navCtrl.push("ReviewlistPage");
      } else if(result["status"] == 0) {
        this.loader.hide();
        let alert = this.alertCtrl.create({
          // title: 'Low battery',
          subTitle: result["message"],
          buttons: ['Ok']
        });
        alert.present();
      }
    }, (err) => {
      console.log("err declined list" +JSON.stringify(err));
      // Error log
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeappPage');
  }
  

  statusChanged(event) {

    console.log("event", event.value);
    if(event.value == "home"){
      this.navCtrl.push("HomeappPage");
      // document.getElementById("home").style.backgroundColor = "black";
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
  
  toAddProduct(){
    console.log("add product");
    this.navCtrl.push("AddproductPage");
  }
  // gotoHome(){
  // 	this.navCtrl.push("HomeappPage");
  // }
  // gotoCart(){
  // 	this.navCtrl.push("CartlistPage");
  // }
  // gotoRequest(){
  // 	this.navCtrl.push("RequestlistPage");
  // }
  // gotoProfile(){
  // 	this.navCtrl.push("ProfilePage");
  // }
  // gotoNotification(){
  // 	this.navCtrl.push("NotificationPage");
  // }
  // gotoInquiryProduct(){
  // 	this.navCtrl.push("InquiryproductdetailPage");
  // }
  // gotoInviteFriend(){
  // 	this.navCtrl.push("InvitefriendsPage");
  // }
  // gotoChangePassword(){
  // 	this.navCtrl.push("ChangepasswordPage");
  // }

}
