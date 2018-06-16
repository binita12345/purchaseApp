import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RequestdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requestdetail',
  templateUrl: 'requestdetail.html',
})
export class RequestdetailPage {
	lists : any = [];
  amount : any;
  address : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  	// this.lists = [{'image' : "assets/imgs/bgcolor.png", 'name':"PRODUCT NAME", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00"},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"PRODUCT NAME", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00"},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"PRODUCT NAME", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00"},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"PRODUCT NAME", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00"}]

    this.lists = navParams.get('productdetail');
    console.log("request detail lists" +JSON.stringify(this.lists));
    // for(let data of this.lists) {
    //   console.log("data...." +JSON.stringify(data));
    //   this.address = data.address;
    //   this.amount = data.amount;
    // }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestdetailPage');
  }

  editProduct(list){
    console.log("list edit..." +JSON.stringify(list));
    // console.log("this.amount..." +JSON.stringify(this.amount));
    this.address = list.address;
    this.amount = list.amount * list.quantity;

    let modal = this.modalCtrl.create('EditmodalPage', {'address': this.address, 'amount': this.amount},{showBackdrop:true, enableBackdropDismiss:false});
    document.getElementById("myDIV").style.opacity = "0.2";
    modal.present();

    modal.onDidDismiss(productId => {
      document.getElementById("myDIV").style.opacity = "1";
      // if(productId){
      //   // this.buyNow(productId)
      // }       
     });
  }

  gotoproductDetail(){
    this.navCtrl.push("ProductdetailPage");
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
