import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
  showOnlyForUser : boolean; 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lists = [{'image' : "assets/imgs/bgcolor.png", 'name':"User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    {'image' : "assets/imgs/bgcolor.png", 'name':"User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    {'image' : "assets/imgs/bgcolor.png", 'name':"User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    {'image' : "assets/imgs/bgcolor.png", 'name':"User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"}]


    this.requests = "delivery";
  }
  statusChanged(event) {

    console.log("event", event.value);
    if(event.value == "delivery"){
      this.delivery = true;
      this.open = false;
      this.close = false;
      console.log("this.lists...1", this.lists);

    } else if(event.value == "open"){
      this.delivery = false;
      this.open = true;
      this.close = false;
      console.log("this.lists...2", this.lists);

    } else if(event.value == "close"){
      this.delivery = false;
      this.open = false;
      this.close = true;
      console.log("this.lists...3", this.lists);

    } else {
      this.delivery = true;
      this.open = false;
      this.close = false;
      console.log("this.lists...4", this.lists);
    }
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
