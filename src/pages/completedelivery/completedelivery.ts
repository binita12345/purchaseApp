import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { Storage } from '@ionic/storage';
import { Loader } from "../../providers/loader/loader";
/**
 * Generated class for the CompletedeliveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-completedelivery',
  templateUrl: 'completedelivery.html',
})
export class CompletedeliveryPage {
	selectedProducts : any = [];
  orderid : any;
  // allProduct : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServiceProvider, public storage: Storage,
    private alertCtrl: AlertController, private loader: Loader) {
  	// this.lists = [{'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00"},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00"},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00"}]
    // this.storage.get("confirmOrderid").then((orderId) => {
    //   // console.log("orderId", orderId);
    //   this.orderid = orderId;
    // });
    // this.storage.get("allSelect").then((allProductDone) => {
    //   console.log("allProductDone" +allProductDone);
    //   this.allProduct = allProductDone;
    // });
    this.orderid = navParams.get('orderid');
    console.log("this.orderid complete delivery" +this.orderid);
    this.selectedProducts = navParams.get('selectedProducts');
    console.log("delivery this.selectedProducts.... " +JSON.stringify(this.selectedProducts));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompletedeliveryPage');
  }

  gotodeliveryList() {
    this.loader.show("Please Wait");
    let confirmData = {
      "orderid": this.orderid
    }

    if(this.selectedProducts == "") {
      this.loader.hide();
        let alert = this.alertCtrl.create({
          // title: 'Low battery',
          subTitle: "You have not selected any product, Please select all products to deliver",
          buttons: [
              {
                text: 'OK',
                handler: () => {
                  console.log('ok clicked');
                  this.navCtrl.pop();
                }
              }
            ]
        });
        alert.present();
    } else {
      // if(this.allProduct == true) {
        this.serviceProvider.completeDeliveryData(confirmData).then((result) => {
          console.log("result completeDeliveryData" +JSON.stringify(result));

          if(result["status"] == 0) {
            // this.error = result["message"];
            // console.log("this.error 0", this.error);
            this.loader.hide();
            let alert = this.alertCtrl.create({
              // title: 'Low battery',
              subTitle: result["message"],
              buttons: ['Ok']
            });
            alert.present();
          } else if(result["status"] == 1) {
            // console.log("signup status 1", result["message"]);
            this.loader.hide();
            let alert = this.alertCtrl.create({
              subTitle: result["message"],
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    console.log('ok clicked');
                    this.navCtrl.push("DeliverylistPage", {'selectedProducts' : this.selectedProducts });
                  }
                }
              ]
            });
            alert.present();
          } else {

          }
        }, (err) => {
          console.log("err completeDeliveryData" +JSON.stringify(err));
          // Error log
        });
      // } else {
      //   this.loader.hide();
      //   let alert = this.alertCtrl.create({
      //     // title: 'Low battery',
      //     subTitle: "Please select all products to deliver",
      //     buttons: [
      //         {
      //           text: 'OK',
      //           handler: () => {
      //             console.log('ok clicked');
      //             this.navCtrl.pop();
      //           }
      //         }
      //       ]
      //   });
      //   alert.present();
      // }
      
    }
    
  	
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
