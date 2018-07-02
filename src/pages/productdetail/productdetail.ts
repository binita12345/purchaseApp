import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the ProductdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-productdetail',
  templateUrl: 'productdetail.html',
})
export class ProductdetailPage {
	name : any;
	description : any;
	// pickup : any;
	// dropoff : any;
  address: any;
	time : any;
	amount : any;
  detailProduct : any;
  image : any;
  base64Image : any;
  error : any = '';
  productid : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public platform: Platform, public actionSheetCtrl: ActionSheetController,
    public serviceProvider: ServiceProvider, private alertCtrl: AlertController) {
  	// this.name = "xyz products";
  	// this.description = "There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour";
  	// this.address = "Maidenhead, SL6 1QZ, United Kingdom";
  	// // this.dropoff = "Maidenhead, SL6 1QZ, United Kingdom";
  	// this.time = "12:12";
  	// this.amount = "$5212";
    this.detailProduct = navParams.get('productDetail');
    console.log('this.detailProduct', this.detailProduct);
    this.productid = this.detailProduct.productid;
    this.name = this.detailProduct.name;
    this.description = this.detailProduct.description;
    this.address = this.detailProduct.address;
    // this.dropoff = "Maidenhead, SL6 1QZ, United Kingdom";
    this.time = this.detailProduct.deliveryTime;

    console.log("detail this.detailProduct.amount" +this.detailProduct.amount);
    this.amount = this.detailProduct.amount;
    console.log("detail this.amount" +this.amount);

    if(this.detailProduct.productImage == "") {
      this.base64Image = 'assets/imgs/photo-camera.png';
    } else {
      this.base64Image = this.detailProduct.productImage;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductdetailPage');
  }

  choosePhoto() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Option',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'ios-camera-outline' : null,
          handler: () => {
            this.takephoto();
          }
        },
        {
          text: 'Choose photo from Gallery',
          icon: !this.platform.is('ios') ? 'ios-images-outline' : null,
          handler: () => {
            this.openGallery();
          }
        },
      ]
    });
    actionSheet.present();
  }

  takephoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.image = imageData;
      // console.log("take photo imagedata" +JSON.stringify(imageData));
      this.base64Image  = 'data:image/png;base64,' + imageData;
      // console.log("take photo base64Image" +this.base64Image);
      // this.photos.push(this.base64Image);
      // this.photos.reverse();
    }, (err) => {
      // Handle error
    })
  }
 
  openGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }  
 
    this.camera.getPicture(options).then((imageData) => {
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
      this.image = imageData;
      // console.log("gallary imagedata" +JSON.stringify(imageData));
      this.base64Image  = 'data:image/png;base64,' + imageData;
      // console.log("gallary base64Image" +this.base64Image);
    }, (err) => {
       // Handle error
    })
  }

  editProduct(){
    // console.log('this.productid', this.productid);
    // console.log('this.name', this.name);
    // console.log('this.description', this.description);
    // console.log('this.address', this.address);
    // console.log('this.time', this.time);
    // console.log('this.amount', this.amount);
    // console.log('this.base64Image', this.base64Image);

    this.error = '';
    let productObj = {
      "productid":this.productid,
      "name":this.name,
      "description":this.description,
      "address":this.address,
      "deliveryTime":this.time,
      "amount":this.amount,
      "productImage":this.image
    }
    console.log("productObj" +JSON.stringify(productObj));
    // if(this.serviceProvider.getNetworkType() == 'none') {
    //   // console.log('network was disconnected :-(');
    //   let alert = this.alertCtrl.create({
    //     title: 'Oops!',
    //     subTitle: "You seem to be offline ! Please Enable network to edit the product",
    //     buttons: [{
    //       text: ("Okay")
    //     }]
    //   });
    //   alert.present();
    // } else {
      this.serviceProvider.editProductData(productObj).then((result) => {
        console.log("result profile" +JSON.stringify(result));
        if(result["status"] == 1) {
          let alert = this.alertCtrl.create({
            subTitle: result["message"],
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  console.log('ok clicked');
                  this.navCtrl.push("RequestlistPage");
                }
              }
            ]
          });
          alert.present();
        } else if(result["status"] == 0){
          let alert = this.alertCtrl.create({
            subTitle: result["message"],
            buttons: ['Ok']
          });
          alert.present();
        } else {

        }
        // this.getProfileData();
      }, (err) => {
        console.log("err product edit" +JSON.stringify(err));
        // Error log
      });
    // }
    // this.navCtrl.push("ProfilePage");
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
