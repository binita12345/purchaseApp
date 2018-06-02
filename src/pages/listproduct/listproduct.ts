import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listproduct',
  templateUrl: 'listproduct.html',
})
export class ListproductPage {
	lists : any = [];
	// selectedAll : boolean = true;
	// list : any;
	selectedAll: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.lists = [{'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00", 'id' : "1",selected: false},
    {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00", 'id' : "2",selected: false},
    {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00", 'id' : "3",selected: false}]

    // console.log("this.selectsAll", this.selectsAll);
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
  completedelivery() {
  	this.navCtrl.push("CompletedeliveryPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListproductPage');
  }

  // selectAll() {
  // 	this.selectedAll=true;
  //   console.log(this.lists);
  // }

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
