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
  // initial : boolean = true;
  delivery : boolean = true;
  open : boolean = false;
  close : boolean = false;

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
      // this.initial = false;
      this.delivery = true;
      this.open = false;
      this.close = false;
      console.log("this.lists...1", this.lists);
      // document.getElementById("myDiv").style.marginTop = "100px";

    } else if(event.value == "open"){
      // this.initial = false;
      this.delivery = false;
      this.open = true;
      this.close = false;
      // document.getElementById("myDiv1").style.marginTop = "100px";
      console.log("this.lists...2", this.lists);

    } else if(event.value == "close"){
     // this.initial = false;
      this.delivery = false;
      this.open = false;
      this.close = true;
      console.log("this.lists...3", this.lists);
      // document.getElementById("myDiv2").style.marginTop = "100px";

    } else {
      // this.initial = false;
      this.delivery = true;
      this.open = false;
      this.close = false;
      console.log("this.lists...4", this.lists);
      // document.getElementById("myDiv").style.marginTop = "100px";
    }
  }

  addreview(){
    this.navCtrl.push("AddreviewPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestlistPage');
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
  gotoRequest(){
  	this.navCtrl.push("RequestlistPage");
  	// document.getElementById("target3").style.background = "#000000";
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
  	this.navCtrl.push("InquiryproductPage");
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
