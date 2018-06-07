import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Platform } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

	public signUpFrom:FormGroup;
	radioValue: any;
  userValue: any;
	customer: boolean = false;
	supplier: boolean = true;
  // base64Image : any;
  base64Image = 'assets/imgs/photo-camera.png';
  responseData : any;
  error : any = '';
  image : 'assets/imgs/photo-camera.png';

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private camera: Camera, public platform: Platform, 
    public actionSheetCtrl: ActionSheetController, public serviceProvider: ServiceProvider, private alertCtrl: AlertController, public storage: Storage) {

  	this.signUpFrom = formBuilder.group({
      name: [''],
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required])],
      mobile: [''],
      gender: [''],
      userType: [''],
      // customer: [''],
      // supplier : [''],
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
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      // console.log("take photo imagedata" +JSON.stringify(imageData));
      this.image = imageData;
      console.log("take photo image" +this.image);
      this.base64Image  = 'data:image/jpeg;base64,' + imageData;
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
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }
 
    this.camera.getPicture(options).then((imageData) => {
      console.log("get image from gallary");
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
      // console.log("gallary imagedata" +JSON.stringify(imageData));
      this.image = imageData;
      console.log("gallary image" +this.image);
      this.base64Image  = 'data:image/jpeg;base64,'+imageData;
      // console.log("gallary base64Image" +this.base64Image);
    }, (err) => {
       // Handle error
       console.log("gallary err" +JSON.stringify(err));
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  mcqAnswer(value)
  {
     console.log("value", value);
     this.radioValue = value;
     console.log("this.radioValue", this.radioValue);
  }
  userAnswer(value1)
  {
     console.log("value..1", value1);
     this.userValue = value1;
     console.log("this.userValue", this.userValue);
  }
  userAccount(){
    this.error = '';
  	console.log("user account");

  	let formObj = {
      'name':this.signUpFrom.value.name,
      'email':this.signUpFrom.value.email,
      'password':this.signUpFrom.value.password,
      'mobileNo':this.signUpFrom.value.mobile,
      'gender':this.radioValue,
      'userType':this.userValue,
      'userImage':this.image
      // 'customer':this.signUpFrom.value.customer,
      // 'supplier':this.signUpFrom.value.supplier
    }

    console.log("formObj signup" +JSON.stringify(formObj));

    this.serviceProvider.signupData(formObj).then((result) => {
      console.log("result signup" +JSON.stringify(result));
      this.responseData = result;
      console.log("this.responseData" +JSON.stringify(this.responseData));

      // set storage data to get all user data on profile page
      this.storage.set('userSignupData', this.responseData);

      if(this.responseData["status"] == 0) {
        // this.error = this.responseData["message"];
        // console.log("this.error 0", this.error);
        let alert = this.alertCtrl.create({
          // title: 'Low battery',
          subTitle: this.responseData["message"],
          buttons: ['Ok']
        });
        alert.present();
      } else if(this.responseData["status"] == 1) {
        console.log("signup status 1", this.responseData["message"]);
        let alert = this.alertCtrl.create({
          subTitle: this.responseData["message"],
          buttons: [
            {
              text: 'OK',
              handler: () => {
                console.log('ok clicked');
                // console.log("this.responseData on alert control" +JSON.stringify(this.responseData));
                console.log("usertype signup" +this.responseData.data.user_type);
                let userType = this.responseData.data.user_type;
                this.storage.set('user_type', userType);
                
                this.navCtrl.push("SigninPage");
              }
            }
          ]
        });
        alert.present();
      } else if(this.responseData["status"] == 2) {
        // this.error = this.responseData["message"];
        let alert = this.alertCtrl.create({
          // title: 'Low battery',
          subTitle: this.responseData["message"],
          buttons: ['Ok']
        });
        alert.present();
      } else {

      }
    }, (err) => {
      console.log("err signup" +JSON.stringify(err));
      // Error log
    });
  }
  gotoSignIn(){
  	this.navCtrl.push("SigninPage");
  }

}
