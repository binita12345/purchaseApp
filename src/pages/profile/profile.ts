import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  userProfileData : any;
  name : any;
  email : any;
  mobile : any;
  gender : any;
  image : any;
  error : any = '';
  id : any;
  // userImage : any;
  base64Image : any;
  // base64Image = 'assets/imgs/photo-camera.png';

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private camera: Camera, public platform: Platform,
    public actionSheetCtrl: ActionSheetController, public serviceProvider: ServiceProvider, private alertCtrl: AlertController) {
    // this.storage.get("userSignupData").then((getUserSignupData) => {
    //   // console.log("getUserSignupData" +JSON.stringify(getUserSignupData));
    //   this.userProfileData = getUserSignupData;
    //   console.log("this.userProfileData" +JSON.stringify(this.userProfileData));

      // this.name = this.userProfileData.data.name;
      // this.email = this.userProfileData.data.email;
      // this.mobile = this.userProfileData.data.mobile;
      // this.gender = this.userProfileData.data.gender;
      // this.base64Image = this.userProfileData.data.userImage;
    // });
    this.getProfileData();
  }  

  getProfileData() {
    this.storage.get("userData").then(userData => {
      // console.log("user profile data" +JSON.stringify(userData));
      this.id = userData.data.ID;
      this.name = userData.data.name;
      this.email = userData.data.email;
      this.mobile = userData.data.mobile;
      this.gender = userData.data.gender;
      if(userData.data.userImage == "") {
        this.base64Image = 'assets/imgs/photo-camera.png';
      } else {
        this.base64Image = userData.data.userImage;
      }
      
    });
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

  editProfile(){
    this.error = '';
    let profileObj = {
      'ID': this.id,
      'name':this.name,
      'email':this.email,
      'mobileNo':this.mobile,
      'gender':this.gender,
      'userImage':this.image
      // 'customer':this.signUpFrom.value.customer,
      // 'supplier':this.signUpFrom.value.supplier
    }
    // console.log("profileObj" +JSON.stringify(profileObj));
    // if(this.serviceProvider.getNetworkType() == 'none') {
    //   // console.log('network was disconnected :-(');
    //   let alert = this.alertCtrl.create({
    //     title: 'Oops!',
    //     subTitle: "You seem to be offline ! Please Enable network to edit profile",
    //     buttons: [{
    //       text: ("Okay")
    //     }]
    //   });
    //   alert.present();
    // } else {
      this.serviceProvider.profileUpdateData(profileObj).then((result) => {
        console.log("result profile" +JSON.stringify(result));
        if(result["status"] == 1) {
          let alert = this.alertCtrl.create({
            subTitle: result["message"],
            buttons: ['Ok']
          });
          alert.present();
        }
        // this.getProfileData();
      }, (err) => {
        console.log("err profile" +JSON.stringify(err));
        // Error log
      });
    // }
    // this.navCtrl.push("ProfilePage");
  }

  logout(){
    this.navCtrl.push("SigninPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
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
