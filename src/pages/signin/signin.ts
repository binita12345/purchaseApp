import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { Storage } from '@ionic/storage';
import { Loader } from "../../providers/loader/loader";
import { ServiceProvider } from '../../providers/service/service';
import { Device } from '@ionic-native/device';
import { Facebook } from '@ionic-native/facebook';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public storage: Storage, 
    private loader: Loader, public serviceProvider: ServiceProvider, private device: Device, private fb: Facebook) {
    this.signInFrom = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(4), Validators.required])],
    });

    this.signInFrom.controls.email.setValue('both@gmail.com');
    this.signInFrom.controls.password.setValue('123456')

    this.storage.get("user_type").then((userType) => {
      console.log("userType", userType);
      this.usertype = userType;
    });

    fb.getLoginStatus()
    .then(res => {
      console.log(res.status);
      if(res.status === "connect") {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    })
    .catch(e => console.log(e));
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
    console.log("this.usertype", this.usertype);
    this.deviceInfo.token = this.device.uuid;
    console.log("this.deviceInfo.token", this.deviceInfo.token);
    this.deviceInfo.platform = this.device.platform;
    console.log("this.deviceInfo.platform", this.deviceInfo.platform);

    let signinData = {
      email: this.signInFrom.value.email,
      password: this.signInFrom.value.password,
      deviceType: this.deviceInfo.platform,
      deviceToken: this.deviceInfo.token
    };
    console.log("signinData object" +JSON.stringify(signinData));

    if (!this.signInFrom.valid) {
      this.loader.hide();
    } else {
      this.serviceProvider.signinData(signinData).then(
        data => {
          console.log("ts data" +JSON.stringify(data))

          let obj: any = data;
          console.log("obj" +JSON.stringify(obj));
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
