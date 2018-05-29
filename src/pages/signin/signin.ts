import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  public signInFrom:FormGroup;
  email : any;
  password :  any;
  // remember :  any;
  error : any = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public storage: Storage) {
    this.signInFrom = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(4), Validators.required])],
    });
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
    console.log("sign in email", this.signInFrom.value.email);
    console.log("sign in password", this.signInFrom.value.password);
    if(this.signInFrom.value.email == "user@gmail.com" && this.signInFrom.value.password == "123456") {
      this.storage.set('isUserLogin', true);
      console.log("go to home page");
      this.navCtrl.push("HomeappPage");
    } else if(this.signInFrom.value.email == "supplier@gmail.com" && this.signInFrom.value.password == "123456"){
      this.storage.set('isSupplierLogin', true);
      console.log("go to home page");
    }
    
    
    // this.navCtrl.setRoot('TabsPage');
  }

}
