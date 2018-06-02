import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the RequestlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requestlist',
  templateUrl: 'requestlist.html',
})
export class RequestlistPage {
  lists : any = [];
  requests : any;
  delivery : boolean = true;
  open : boolean = false;
  close : boolean = false;
  userrequest : boolean = false;
  showOnlyForUser : boolean; 
  showForBoth : boolean;
  customerLogin : any;
  bothLogin : any;
  supplierLogin : any;
  forUserContent : any;
  forSupplierContent : any;
  forBothContent : any;
  forSupplier : boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.lists = [{'image' : "assets/imgs/bgcolor.png", 'name':"User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    {'image' : "assets/imgs/bgcolor.png", 'name':"User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    {'image' : "assets/imgs/bgcolor.png", 'name':"User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    {'image' : "assets/imgs/bgcolor.png", 'name':"User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"}]

    this.requests = "delivery";

    this.storage.get("isCustomerLogin").then((CustomerLogin) => {
      console.log("CustomerLogin", CustomerLogin);
      this.customerLogin = CustomerLogin;
      
      if(this.customerLogin){
        this.forUserContent = true;
        this.forSupplierContent =false;
        this.forBothContent = false;
        this.showOnlyForUser = true;
        this.showForBoth = false;
        // this.userORboth = true;
      }
    });
    this.storage.get("isSupplierLogin").then((SupplierLogin) => {
      console.log("SupplierLogin", SupplierLogin);
      this.supplierLogin = SupplierLogin;

      if(this.supplierLogin){
        this.forUserContent = false;
        this.forSupplierContent =true;
        this.forBothContent = false;
        this.showOnlyForUser = false;
        this.showForBoth = false;
        this.forSupplier = false;
      }
    });
    this.storage.get("isBothLogin").then((BothLogin) => {
      console.log("BothLogin", BothLogin);
      this.bothLogin = BothLogin;

      if(this.bothLogin){
        this.forUserContent = false;
        this.forSupplierContent =false;
        this.forBothContent = true;
        this.showOnlyForUser = false;
        this.showForBoth = true;
        // this.userORboth = true;
      }
    });
  }
  statusChanged(event) {

    console.log("event", event.value);
    if(event.value == "delivery"){
      this.delivery = true;
      this.open = false;
      this.close = false;
      this.userrequest = false;
      console.log("this.lists...1", this.lists);

    } else if(event.value == "open"){
      this.delivery = false;
      this.open = true;
      this.close = false;
      this.userrequest = false;
      console.log("this.lists...2", this.lists);

    } else if(event.value == "close"){
      this.delivery = false;
      this.open = false;
      this.close = true;
      this.userrequest = false;
      console.log("this.lists...3", this.lists);

    } else if(event.value == "userrequest"){
      this.delivery = false;
      this.open = false;
      this.close = false;
      this.userrequest = true;
      console.log("this.lists...4", this.lists);

    } else {
      this.delivery = true;
      this.open = false;
      this.close = false;
      this.userrequest = false;
      console.log("this.lists...5", this.lists);
    }
  }

  showList() {
    this.navCtrl.push("ListproductPage");
  }

  addreview(){
    this.navCtrl.push("AddreviewPage");
  }
  gotorequestDetail(){
    this.navCtrl.push("RequestdetailPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestlistPage');
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
