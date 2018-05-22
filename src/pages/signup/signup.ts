import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
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
	customer: boolean = false;
	supplier: boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder) {

  	this.signUpFrom = formBuilder.group({
      name: [''],
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.required])],
      mobile: [''],
      gender: [''],
      customer: [''],
      supplier : [''],
    });
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
  userAccount(){
  	console.log("created user account");

  	let formObj = {
      'name':this.signUpFrom.value.name,
      'email':this.signUpFrom.value.email,
      'password':this.signUpFrom.value.password,
      'mobile':this.signUpFrom.value.mobile,
      'gender':this.radioValue,
      'customer':this.signUpFrom.value.customer,
      'supplier':this.signUpFrom.value.supplier
    }
    console.log(formObj);
    this.navCtrl.push("HomeappPage");
  }
  gotoSignIn(){
  	this.navCtrl.push("SigninPage");
  }

}
