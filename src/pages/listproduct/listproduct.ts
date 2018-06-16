import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
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
  productdetail : any = [];
  selectedProducts :any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  	// this.lists = [{'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00", 'id' : "1",selected: false},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00", 'id' : "2",selected: false},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00", 'id' : "3",selected: false}]
    this.productdetail = navParams.get('productdetail');
    console.log("this.productdetail", this.productdetail);
  }

  selectAll() {
  	console.log("selects all");
    for (var i = 0; i < this.productdetail.length; i++) {
      this.productdetail[i].selected = this.selectedAll;
      console.log("this.productdetail[i].selected", this.productdetail[i].selected);
      this.selectedProducts = this.productdetail;
      // console.log("this.selectedProducts" +JSON.stringify(this.selectedProducts));
      this.storage.set("selectedProducts", this.selectedProducts);
    }
  }
  checkIfAllSelected(data) {
    console.log("select check box for product" +JSON.stringify(data));
    this.selectedAll = this.productdetail.every(function(item:any) {
      return item.selected == true;
    })
    // console.log("selected data" +JSON.stringify(data));
    if (data.selected == true) {
      this.selectedProducts.push(data);
      // console.log("this.selectedProducts" +JSON.stringify(this.selectedProducts));
    } else {
      let newArray = this.selectedProducts.filter(function(el) {
        // console.log("el..............." +JSON.stringify(el));
        return el.productid !== data.productid;
      });
      this.selectedProducts = newArray;
    }
    // console.log("product Array........." +JSON.stringify(this.selectedProducts));
    this.storage.set("selectedProducts", this.selectedProducts);
  }
  doneSelectedDelivery() {
  	this.navCtrl.push("CompletedeliveryPage", {'selectedProducts' : this.selectedProducts});
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
