import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the EditmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editmodal',
  templateUrl: 'editmodal.html',
})
export class EditmodalPage {
	address : any;
	// dropoff : any;
	amount : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public renderer: Renderer) {
  	this.address = navParams.get('address');
    console.log("address" +JSON.stringify(this.address));
  	this.amount = navParams.get('amount');
    console.log("amount..." +JSON.stringify(this.amount));

  	this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'custom-popup', true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditmodalPage');
  }
  cancel(){
    this.viewCtrl.dismiss();
  }
  edit(){
  	this.navCtrl.push("RequestdetailPage");
  }

}
