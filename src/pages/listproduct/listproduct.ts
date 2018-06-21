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
  amount : any;
  quantity : any;
  count : any;
  totalPrice : any = 0;
  totalSum : any;
  products : any;
  orderid : any;
  // allProducts: any;
  isEnabled: boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
  	// this.lists = [{'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00", 'id' : "1",selected: false},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00", 'id' : "2",selected: false},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00", 'id' : "3",selected: false}]
    this.products = navParams.get('productdetail');
    console.log("this.products" +JSON.stringify(this.products));
    this.productdetail = this.products.productDetails;
    console.log("this.productdetail" +JSON.stringify(this.productdetail));
    this.orderid = this.products.orderid;
    console.log("this.orderid list products" +this.orderid);
    // let totalPrice = 0;
    // let stringArray : any = [];
    // for(let detail of this.productdetail) {
    //   // console.log("get detail......" +JSON.stringify(detail));
    //   this.amount = detail.amount;
    //   this.quantity = detail.quantity;
    //   this.count = this.amount * this.quantity;
    //   // console.log("this.count......" +JSON.stringify(this.count));

    //   this.totalPrice += this.count;
    //   console.log("this.totalPrice......" +JSON.stringify(this.totalPrice));
    //   // this.totalSum = this.totalPrice;
    //   // // console.log("totalPrice......" +JSON.stringify(this.totalPrice));
    //   // console.log("this.totalSum......" +this.totalSum);  
    //   this.storage.set('totalSum', this.totalPrice);
    // }

  }

  selectAll() {
    
  	console.log("selects all");
    this.isEnabled = !this.isEnabled;
    for (var i = 0; i < this.productdetail.length; i++) {
      this.productdetail[i].selected = this.selectedAll;
      console.log("this.productdetail[i].selected" +this.productdetail[i].selected);
      if(this.productdetail[i].selected == true) {
        this.selectedProducts = this.productdetail;
        // this.allProducts = true;
        
        // this.storage.set('allSelect', this.allProducts);
      // } else {
      //   this.selectedProducts = "";
      }
      
      // console.log("this.selectedProducts" +JSON.stringify(this.selectedProducts));
    }
  }
  checkIfAllSelected(data) {
    // this.allProducts = false;
    console.log("select check box for product" +JSON.stringify(data));
    this.selectedAll = this.productdetail.every(function(item:any) {
      console.log("item......." +JSON.stringify(item));
      // console.log("this.selectedAll......." +JSON.stringify(this.selectedAll));
      return item.selected == true;
      // this.isEnabled=true;
    })
    console.log("this.selectedAll......." +JSON.stringify(this.selectedAll));
    if(this.selectedAll == true) {
      this.isEnabled = true;
    } else {
      this.isEnabled = false;
    }
    console.log("selected data" +JSON.stringify(data));
    if (data.selected == true) {
      // this.selectedProducts.push(data);
      this.selectedProducts = data;
      console.log("this.selectedProducts" +JSON.stringify(this.selectedProducts));
    } else {
      let newArray = this.selectedProducts.filter(function(el) {
        console.log("el..............." +JSON.stringify(el));
        return el.productid !== data.productid;
      });
      this.selectedProducts = newArray;
    }
    console.log("product Array........." +JSON.stringify(this.selectedProducts));
    // this.storage.set("selectedProducts", this.selectedProducts);
  }
  doneProductsToDeliver() {
    console.log("doneProductsToDeliver selectedProducts" +JSON.stringify(this.selectedProducts));
  	this.navCtrl.push("CompletedeliveryPage", {'selectedProducts' : this.selectedProducts, 'orderid' : this.orderid});
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
