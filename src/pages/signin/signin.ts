import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { Storage } from '@ionic/storage';
import { Loader } from "../../providers/loader/loader";
import { ServiceProvider } from '../../providers/service/service';
import { Device } from '@ionic-native/device';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface deviceInterface {
  token?: string,
  platform?: string
};

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  public deviceInfo: deviceInterface = {};
  public signInFrom:FormGroup;
  email : any;
  password :  any;
  // remember :  any;
  error : any = '';
  usertype : any;

  isLoggedIn:boolean = false;
  users: any;
  displayName: any;
  familyName: any;
  givenName: any;
  userId: any;
  imageUrl: any;
  loginType : any;
  testRadioResult : any;
  gender: any;
  user_type: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public storage: Storage, 
    private loader: Loader, public serviceProvider: ServiceProvider, private device: Device, private fb: Facebook, private googlePlus: GooglePlus,
    public modalCtrl: ModalController, private alertCtrl: AlertController) {

    // this.modalback = false;

    this.signInFrom = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(4), Validators.required])],
    });

    this.signInFrom.controls.email.setValue('bini1@gmail.com');
    this.signInFrom.controls.password.setValue('123456')

    this.storage.get("user_type").then((userType) => {
      console.log("userType", userType);
      this.usertype = userType;
    });

    console.log("this.usertype", this.usertype);
    this.deviceInfo.token = this.device.uuid;
    console.log("this.deviceInfo.token", this.deviceInfo.token);
    this.deviceInfo.platform = this.device.platform;
    console.log("this.deviceInfo.platform", this.deviceInfo.platform);

    this.gender = navParams.get('gender');
    console.log("this.gender", this.gender);
    this.user_type = navParams.get('user_type');
    console.log("this.user_type", this.user_type);
    // fb.getLoginStatus()
    // .then(res => {
    //   console.log(res.status);
    //   if(res.status === "connect") {
    //     this.isLoggedIn = true;
    //   } else {
    //     this.isLoggedIn = false;
    //   }
    // })
    // .catch(e => console.log(e));
  }

  // fblogin() {
  //   console.log("facebook login");
  //   this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
  //   .then( (res: FacebookLoginResponse) => {
  //     console.log("facebook res" +JSON.stringify(res));
  //     if(res.status === "connected") {
  //       this.isLoggedIn = true;
  //       this.getUserDetail(res.authResponse.userID);
  //     } else {
  //       this.isLoggedIn = false;
  //     }
  //   })
  //   .catch(e => console.log('Error logging into Facebook', e));
  // }
  fblogin(){
    this.loginType = "FACEBOOK";

    console.log("facebook login");
    // Login with permissions
    this.fb.login(['public_profile', 'user_photos', 'email', 'user_birthday'])
    .then( (res: FacebookLoginResponse) => {
        console.log("facebook res" +JSON.stringify(res));
        console.log("facebook res status" +res.status);
        // The connection was successful
        if(res.status == "connected") {

            // Get user ID and Token
            console.log("facebook userId" +res.authResponse.userID);
            var fb_id = res.authResponse.userID;
            console.log("fb_id" +fb_id);

            console.log("facebook accessToken" +res.authResponse.accessToken);
            var fb_token = res.authResponse.accessToken;
            console.log("fb_token" +fb_token);

            // Get user infos from the API
            this.fb.api("/me?fields=name,gender,birthday,email", []).then((user) => {
              console.log("facebook user" +JSON.stringify(user));
                // Get the connected user details
                var gender    = user.gender;
                var birthday  = user.birthday;
                var name      = user.name;
                var email     = user.email;

                console.log("=== USER INFOS ===");
                console.log("Gender : " + gender);
                console.log("Birthday : " + birthday);
                console.log("Name : " + name);
                console.log("Email : " + email);

                // => Open user session and redirect to the next page

            });

        } 
        // An error occurred while loging-in
        else {

            console.log("An error occurred...");

        }

    })
    .catch((e) => {
        console.log('Error logging into Facebook', e);
    });
  }

  googlelogin() {
    this.loginType = "GOOGLE";
    console.log("google login" +this.loginType);
    this.googlePlus.login({})
      .then(res => {
        console.log("google res" +JSON.stringify(res));
        this.displayName = res.displayName;
        this.email = res.email;
        this.familyName = res.familyName;
        this.givenName = res.givenName;
        this.userId = res.userId;
        console.log("google res this.userId" +this.userId);
        this.imageUrl = res.imageUrl;
        console.log("google res this.imageUrl" +this.imageUrl);

        if(res.gender == undefined && res.user_type == undefined){
          console.log("iffffffrf");
          let modal = this.modalCtrl.create('SocialmodalPage');
          document.getElementById("myDIV").style.opacity = "0.5";
          modal.present();
          modal.onDidDismiss(data => {
            console.log(data);
            document.getElementById("myDIV").style.opacity = "1";
          });
        }

        let googlePlusData = {
          "identifierId":this.userId,
          "name":this.displayName,
          "email":this.email,
          "deviceType":this.deviceInfo.platform,
          "deviceToken":this.deviceInfo.token,
          "loginType":this.loginType,
          "userType":this.user_type,
          "userImageUrl":this.imageUrl,
          "gender":this.gender,
          "password": "123456"
        }

        console.log("google plus googlePlusData" +JSON.stringify(googlePlusData));
        this.serviceProvider.socialSignIn(googlePlusData).then(
          data => {
            console.log("ts data" +JSON.stringify(data))

            let obj: any = data;
            console.log("obj" +JSON.stringify(obj));
            console.log("userId" +obj.data.ID);
            console.log("token" +obj.data.sessionId);
            console.log("user_type" +obj.data.user_type);
            // console.log(this.serviceProvider.headers, obj.data.ID);
            this.serviceProvider.headers.append("Authorization", obj.data.sessionId);
            this.storage.set("userData", obj);
            this.storage.set("userId", obj.data.ID);
            this.storage.set("token", obj.data.sessionId);

            if (obj.data.user_type) {
                this.loader.hide();
                this.navCtrl.setRoot("HomeappPage", { user_type: obj.data.user_type });
            }
          },
          err => {
            this.storage.set("userId", "");
            this.storage.set("token", "");
            this.storage.set("userData", "");

            this.loader.hide();
            // console.log("err", err)
            this.error = err.message;
            // console.log("this.error", this.error)
          }
        );

      })
      .catch(err => console.error("google err" +JSON.stringify(err)));

        
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  gotoforgotPassword(){
  	this.navCtrl.push("ForgotpasswordPage");
  }
  onSignup(){
    console.log("go to sign up page");
    this.navCtrl.push("SignupPage");
  }
  appLogin(){
    this.error = "";
    this.loader.show("Please Wait");

    // console.log("sign in email", this.signInFrom.value.email);
    // console.log("sign in password", this.signInFrom.value.password);
    

    let signinData = {
      email: this.signInFrom.value.email,
      password: this.signInFrom.value.password,
      deviceType: this.deviceInfo.platform,
      deviceToken: this.deviceInfo.token
    };
    console.log("signinData object" +JSON.stringify(signinData));

    if (!this.signInFrom.valid) {
      console.log("sign in form is not valid");
      this.loader.hide();
    } else {
      console.log("sign in form is valid");
      this.serviceProvider.signinData(signinData).then(
        data => {
          console.log("ts data" +JSON.stringify(data))

          let obj: any = data;
          console.log("obj" +JSON.stringify(obj));
          console.log("userId" +obj.data.ID);
          console.log("token" +obj.data.sessionId);
          // console.log(this.serviceProvider.headers, obj.data.ID);
          this.serviceProvider.headers.append("Authorization", obj.data.sessionId);
          this.storage.set("userData", obj);
          this.storage.set("userId", obj.data.ID);
          this.storage.set("token", obj.data.sessionId);

          if (obj.data.user_type) {
              this.loader.hide();
              this.navCtrl.setRoot("HomeappPage", { user_type: obj.data.user_type });
          }
        },
        err => {
          this.storage.set("userId", "");
          this.storage.set("token", "");
          this.storage.set("userData", "");

          this.loader.hide();
          // console.log("err", err)
          this.error = err.message;
          // console.log("this.error", this.error)
        }
      );
    }
  }

}
