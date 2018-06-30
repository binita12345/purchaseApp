import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
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
  productOrderId : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public storage: Storage,
    private alertCtrl: AlertController, public serviceProvider: ServiceProvider, private loader: Loader, public toastCtrl: ToastController) {
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
    
  }
  getDetail(){
    //get params here
    this.products = this.navParams.get('productdetails');
    console.log("request detail order products" +JSON.stringify(this.products));
    this.productOrderId = this.products.orderid;
    this.lists = this.products.productDetails;
    console.log("request detail lists" +JSON.stringify(this.lists));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestdetailPage');
    // this.getDetail();
  }
  // ionViewWillEnter(){
  //     this.getDetail();
  // }
  ngOnInit() {
    this.getDetail();
  }

  // editProduct(list){
  //   console.log("request order products" +JSON.stringify(this.products));
    
  //   console.log("list edit..." +JSON.stringify(list));
  //   // console.log("this.amount..." +JSON.stringify(this.amount));
  //   this.orderid = this.products.orderid;
  //   this.productid = list.productid;
  //   this.address = list.address;
  //   this.amount = list.amount * list.quantity;

  //   let editData = {
  //     orderid: this.orderid,
  //     productid: this.productid,
  //     address: this.address,
  //     amount: this.amount
  //   }  

  //   this.storage.set('editdata', editData);

  //   let modal = this.modalCtrl.create('EditmodalPage', {data: editData}, {showBackdrop:true, enableBackdropDismiss:false});
  //   document.getElementById("myDIV").style.opacity = "0.2";
  //   // modal.present();

  //   modal.present();
  //   modal.onWillDismiss(data => {
  //       console.log(`About to dismiss with: ${data}`);
  //   })

  //   modal.onDidDismiss(data => {
  //     console.log("modal data....." +JSON.stringify(data));
  //     document.getElementById("myDIV").style.opacity = "1";
  //   });
  // }

  gotoeditproductDetail(product){
    console.log("edit gotoeditproductDetail" +JSON.stringify(product));
    this.navCtrl.push("ProductdetailPage", {'productDetail': product});
  }

  deleteProduct(productId) {
    console.log("deleteProduct" +productId);
    let deleteData = {
      "productid": productId,
      "orderid": this.productOrderId
    }
    let alert = this.alertCtrl.create({
      title: 'Confirm delete product',
      message: 'Are you sure you want to permanently delete this product?',
      buttons: [
          {
              text: 'No',
              handler: () => {
                  console.log('Cancel clicked');
              }
          },
          {
              text: 'Yes',
              handler: () => {
                console.log('ok clicked');
                this.serviceProvider.deleteProduct(deleteData).then((result) => {
                  console.log("result delete product" +JSON.stringify(result));
                  
                  if(result["status"] == 1){
                    // this.loader.hide();     
                      let toastSuccess = this.toastCtrl.create({
                      message: result["message"],
                      duration: 7000,
                      position: 'top',
                      showCloseButton:true,
                      closeButtonText:'X',
                      cssClass: "toast-success",
                    });
                    toastSuccess.present();
                    this.getDetail();
                    // this.ionViewWillEnter();
                    // this.navCtrl.setRoot(this.navCtrl.getActive().component);
                  } else if(result["status"] == 2) {
                    // this.loader.hide();
                    let alert = this.alertCtrl.create({
                      subTitle: result["message"],
                      buttons: ['Ok']
                    });
                    alert.present();
                  }
                }, (err) => {
                  console.log("err delete records" +JSON.stringify(err));
                  // Error log
                });
              }
          }
      ]
    });
    alert.present();
  }

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

}
