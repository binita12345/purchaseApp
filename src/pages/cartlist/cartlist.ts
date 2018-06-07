import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CartlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cartlist',
  templateUrl: 'cartlist.html',
})
export class CartlistPage {

  lists : any = [];
  customerLogin : any;
  supplierLogin : any;
  forUserContent : any;
  forSupplierContent : any;
  selectedAll: any;
  userType: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.lists = [{'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00", 'id' : "1",selected: false},
    {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00", 'id' : "2",selected: false},
    {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00", 'id' : "3",selected: false},
    {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00", 'id' : "4",selected: false}]

    // this.storage.get("isCustomerLogin").then((CustomerLogin) => {
    //   console.log("CustomerLogin", CustomerLogin);
    //   this.customerLogin = CustomerLogin;
      
    //   if(this.customerLogin){
    //     this.forUserContent = true;
    //     this.forSupplierContent =false;
    //   }
    // });
    // this.storage.get("isSupplierLogin").then((SupplierLogin) => {
    //   console.log("SupplierLogin", SupplierLogin);
    //   this.supplierLogin = SupplierLogin;

    //   if(this.supplierLogin){
    //     this.forUserContent = false;
    //     this.forSupplierContent =true;
    //   }
    // });
    this.storage.get("userData").then(userData => {
      console.log("userData" +JSON.stringify(userData));
      this.userType = userData.data.user_type;
      if (this.userType == "customer") {
        this.forUserContent = true;
        this.forSupplierContent =false;
        // this.forBothContent =false;
      } else if (this.userType == "supplier" || "both") {
        this.forUserContent = false;
        this.forSupplierContent =true;
        // this.forBothContent =false;
      } else {
      }
    });
  }

  selectAll() {
    console.log("selects all");
    for (var i = 0; i < this.lists.length; i++) {
      this.lists[i].selected = this.selectedAll;
      console.log("this.lists[i].selected", this.lists[i].selected);
    }
  }
  checkIfAllSelected() {
    this.selectedAll = this.lists.every(function(item:any) {
        return item.selected == true;
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartlistPage');
  }
  inquiryProduct(){
    this.navCtrl.push("InquiryproductPage");
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

  inviteSupplier(){
    this.navCtrl.push("SupplierlistPage");
  }

}
