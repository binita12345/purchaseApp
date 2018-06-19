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

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServiceProvider, public storage: Storage,
    private alertCtrl: AlertController, private loader: Loader) {
  	// this.lists = [{'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00"},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00"},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00"}]
    this.storage.get("confirmOrderid").then((orderId) => {
      // console.log("orderId", orderId);
      this.orderid = orderId;
    });
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
