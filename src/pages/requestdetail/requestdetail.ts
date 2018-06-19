import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service/service';
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
  products : any;
  orderid : any;
  productid : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public storage: Storage,
    private alertCtrl: AlertController, public serviceProvider: ServiceProvider) {
  	// this.lists = [{'image' : "assets/imgs/bgcolor.png", 'name':"PRODUCT NAME", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00"},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"PRODUCT NAME", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00"},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"PRODUCT NAME", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00"},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"PRODUCT NAME", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00"}]
    // this.storage.get('productdetails').then(productDetail) 
    // this.storage.get("productdetails").then(productDetail => { 
    //   console.log("get request productDetail" +JSON.stringify(productDetail));

    //   this.products = productDetail;
    //   console.log("request order products" +JSON.stringify(this.products));
    // });
    // this.products = navParams.get('productdetails');
    // // console.log("request order products" +JSON.stringify(this.products));
    // this.lists = this.products.productDetails;
    // console.log("request detail lists" +JSON.stringify(this.lists));
    // for(let data of this.lists) {
    //   console.log("data...." +JSON.stringify(data));
    //   this.address = data.address;
    //   this.amount = data.amount;
    // }
    this.getDetail();
  }
  getDetail(){
    //get params here
    this.products = this.navParams.get('productdetails');
    // console.log("request order products" +JSON.stringify(this.products));
    this.lists = this.products.productDetails;
    console.log("request detail lists" +JSON.stringify(this.lists));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestdetailPage');
  }

  editProduct(list){
    console.log("request order products" +JSON.stringify(this.products));
    
    console.log("list edit..." +JSON.stringify(list));
    // console.log("this.amount..." +JSON.stringify(this.amount));
    this.orderid = this.products.orderid;
    this.productid = list.productid;
    this.address = list.address;
    this.amount = list.amount * list.quantity;

    let editData = {
      orderid: this.orderid,
      productid: this.productid,
      address: this.address,
      amount: this.amount
    }  
    // let alert = this.alertCtrl.create({
    //   title: 'Products names',
    //   inputs: [
    //     {
    //       name: 'Delivery Address',
    //       placeholder: this.address
    //     },
    //     {
    //       name: 'Price',
    //       placeholder: this.amount
    //     }
    //   ],
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       handler: data => {
    //         console.log('Cancel clicked');
    //       }
    //     },
    //     {
    //       text: 'Edit',
    //       handler: data => {
    //         this.serviceProvider.editProductData(editData).then((result) => {
    //           console.log("edited result" +JSON.stringify(result));

    //           if(result['status'] == 1) {
    //             // this.loader.hide();
    //             let alert = this.alertCtrl.create({
    //               subTitle: result["message"],
    //               buttons: [
    //                 {
    //                   text: 'OK',
    //                   handler: () => {
    //                     console.log('ok clicked');
    //                     this.getDetail();
    //                     // this.viewCtrl.dismiss(result);
    //                     // this.geteditedData();
    //                     // this.navCtrl.pop();
    //                     // this.getRequestDetail();
    //                   }
    //                 }
    //               ]
    //             });
    //             alert.present();
    //           } else {
    //             // this.loader.hide();
    //             let alert = this.alertCtrl.create({
    //               subTitle: result["message"],
    //               buttons: ['Ok']
    //             });
    //             alert.present();
    //           }
    //         }, (err) => {
    //           console.log("err edit product" +JSON.stringify(err));
    //           // Error log
    //         });
    //         // if (User.isValid(data.username, data.password)) {
    //         //   // logged in!
    //         // } else {
    //         //   // invalid login
    //         //   return false;
    //         // }
    //       }
    //     }
    //   ]
    // });
    // alert.present();

    this.storage.set('editdata', editData);

    let modal = this.modalCtrl.create('EditmodalPage', {data: editData}, {showBackdrop:true, enableBackdropDismiss:false});
    document.getElementById("myDIV").style.opacity = "0.2";
    // modal.present();

    modal.present();
    modal.onWillDismiss(data => {
        console.log(`About to dismiss with: ${data}`);
    })
    // modal.onDidDimiss(data => {
    //     console.log(`Dismissed with: ${data}`);
    // })

    modal.onDidDismiss(data => {
      console.log("modal data....." +JSON.stringify(data));
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
