import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the OrderproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderproduct',
  templateUrl: 'orderproduct.html',
})
export class OrderproductPage {
	lists : any = [];
  selectedbox : boolean;
  supplierId : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public serviceProvider: ServiceProvider) {
  	// this.lists = [{'image' : "assets/imgs/bgcolor.png", 'name':"Product names", 'price': "$512"},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"Product names", 'price': "$512"}]
    this.supplierId = navParams.get('supplierid');
    console.log("this.supplierId" +JSON.stringify(this.supplierId));

    this.storage.get("checked").then(checked => {
      console.log("checked" +checked);
      if(checked) {
        this.storage.get("selectedArray").then(getSelectedArray => {
          console.log("getSelectedArray" +JSON.stringify(getSelectedArray));
          for (let array of getSelectedArray) {
            console.log("array....." +JSON.stringify(array));
            this.selectedbox = array.selected;
            console.log("this.selectedbox....." +JSON.stringify(this.selectedbox));
            if(this.selectedbox == true) {
              console.log("if true");
              this.lists = getSelectedArray;
            } else {
              console.log("else false");
              this.lists = [];
            }
          }
          // this.lists = getSelectedArray;
        });
      }
        
    });
  }

  placeOrder() {
    console.log("order place");
    let placeData = {

    }

  }

  closeProduct() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderproductPage');
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
  gotoRequestlist(){
  	this.navCtrl.push("RequestlistPage");
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
