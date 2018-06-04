import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SocialmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-socialmodal',
  templateUrl: 'socialmodal.html',
})
export class SocialmodalPage {

	radioValue: any;
	userValue: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public renderer: Renderer) {

	this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'my-popup', true);
  }

  ionViewDidLoad() {
		console.log('ionViewDidLoad SocialmodalPage');
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
  cancel(){
		this.viewCtrl.dismiss();
  }
  save(){
		this.navCtrl.push("SigninPage", {'gender' :this.radioValue, 'user_type': this.userValue});
  }

}
