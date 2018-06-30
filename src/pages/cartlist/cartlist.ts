import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
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
  id : any;
  selectedArray :any = [];
  currentLatitude : any;
  currentLongitude : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public serviceProvider: ServiceProvider,
    private loader: Loader) {
    // this.lists = [{'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00", 'id' : "1",selected: false},
    // {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00", 'id' : "2",selected: false},
    // {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00", 'id' : "3",selected: false},
    // {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00", 'id' : "4",selected: false}]
    this.getCurrentLocation();
    this.id = navParams.get('id');
    // console.log("get navpramas this.id" +this.id);
    this.storage.get("userData").then(userData => {
      // console.log("userData" +JSON.stringify(userData));
      this.id = userData.data.ID;
      // console.log("this.id" +this.id);
      this.userType = userData.data.user_type;
      // if (this.userType == "CUSTOMER") {
      //   this.forUserContent = true;
      //   this.forSupplierContent =false;
      //   // this.forBothContent =false;
      // } else if (this.userType == "SUPPLIER" || "USER") {
      //   this.forUserContent = false;
      //   this.forSupplierContent =true;
      //   // this.forBothContent =false;
      // } else {
      // }
      
      this.getProductsListData();
      this.storage.remove("selectedArray");
    });
    
  }

  getCurrentLocation() {
    this.storage.get("currentLatitude").then(currentLat => {
      this.currentLatitude = currentLat;
      console.log("this.currentLatitude" +this.currentLatitude);
    });
    this.storage.get("currentLongitude").then(currentLng => {
      this.currentLongitude = currentLng;
      console.log("this.currentLongitude" +this.currentLongitude);
    });
  }

  getProductsListData() {
    this.loader.show("Retrieving products...");
    // console.log("getProductsListData");
    // console.log("this.id....." +this.id);
    let getId = {
      'ID' : this.id,
      "latitude": this.currentLatitude,
      "longitude": this.currentLongitude,
    }
    console.log("getId" +JSON.stringify(getId));
    this.serviceProvider.getProductList(getId).then((result) => {
      // console.log("result products list" +JSON.stringify(result));
      if(result["status"] == 1) {
        this.loader.hide();
        this.lists = result["data"];
        console.log("lists of product" +JSON.stringify(this.lists));
      }
      // this.getProfileData();
    }, (err) => {
      console.log("err product list" +JSON.stringify(err));
      // Error log
    });
  }

  selectAll() {
    console.log("selects all");
    for (var i = 0; i < this.lists.length; i++) {
      this.lists[i].selected = this.selectedAll;
      console.log("this.lists[i].selected" +this.lists[i].selected);
      // console.log("this.lists" +JSON.stringify(this.lists));
      this.selectedArray = this.lists;
      // console.log("this.selectedArray" +JSON.stringify(this.selectedArray));
      this.storage.set("selectedArray", this.selectedArray);
    }
  }
  checkIfAllSelected(data) {
    console.log("select check box for product" +JSON.stringify(data));
    this.selectedAll = this.lists.every(function(item:any) {
      return item.selected == true;
    })
    // console.log("selected data" +JSON.stringify(data));
    if (data.selected == true) {
      this.selectedArray.push(data);
      // console.log("this.selectedArray" +JSON.stringify(this.selectedArray));
    } else {
      let newArray = this.selectedArray.filter(function(el) {
        // console.log("el..............." +JSON.stringify(el));
        return el.productid !== data.productid;
      });
      this.selectedArray = newArray;
    }
    // console.log("product Array........." +JSON.stringify(this.selectedArray));
    this.storage.set("selectedArray", this.selectedArray);
    // this.selectedAll = this.lists.every(function(item:any) {
    //     return item.selected == true;
    //   })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartlistPage');
  }
  // inquiryProduct(){
  //   this.navCtrl.push("InquiryproductPage");
  // }

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

  inviteSupplier(){
    this.navCtrl.push("SupplierlistPage");
  }

}
