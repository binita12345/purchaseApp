import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Loader } from "../../providers/loader/loader";
import { ServiceProvider } from '../../providers/service/service';
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
  // editObj : any;
  data: String
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public renderer: Renderer, 
    public serviceProvider: ServiceProvider, public storage: Storage, private loader: Loader, private alertCtrl: AlertController) {
  	// this.address = navParams.get('address');
   //  console.log("address" +JSON.stringify(this.address));
  	// this.amount = navParams.get('amount');
   //  console.log("amount..." +JSON.stringify(this.amount));
    this.geteditedData();
  }
  // geteditedData() {
  //   // this.storage.get("editdata").then(editedData => { 
  //   //   console.log("get request editedData" +JSON.stringify(editedData));

  //   //   this.editObj = editedData;
  //   //   console.log("request order products" +JSON.stringify(this.editObj));
  //   // });
  //   this.editObj = this.navParams.get('editdata');
  //   console.log("editObj..." +JSON.stringify(this.editObj));
    // this.address = this.editObj.address;
    // this.amount = this.editObj.amount;
  //   // this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'custom-popup', true);
  // }

  geteditedData() {
    this.data = this.navParams.get('data');
    console.log("this.data......" +JSON.stringify(this.data));
    this.address = this.data["address"];
    this.amount = this.data["amount"];
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditmodalPage');
  }
  cancel(){
    this.viewCtrl.dismiss(this.data);
  }
  edit(){
    // console.log("edit data..." +JSON.stringify(data));
    let dataEdit = {
      orderid: this.data["orderid"],
      productid: this.data["productid"],
      address: this.address,
      amount: this.amount
    }
    console.log("this.data edit time..." +JSON.stringify(dataEdit));
    this.serviceProvider.editProductData(dataEdit).then((result) => {
      console.log("edited result" +JSON.stringify(result));

      if(result['status'] == 1) {
        // this.loader.hide();
        let alert = this.alertCtrl.create({
          subTitle: result["message"],
          buttons: [
            {
              text: 'OK',
              handler: () => {
                console.log('ok clicked');
                this.viewCtrl.dismiss(dataEdit);
                // this.navCtrl.push("RequestdetailPage");
                this.geteditedData();
                
                // this.getRequestDetail();
              }
            }
          ]
        });
        alert.present();
      } else {
        // this.loader.hide();
        let alert = this.alertCtrl.create({
          subTitle: result["message"],
          buttons: ['Ok']
        });
        alert.present();
      }
    }, (err) => {
      console.log("err signup" +JSON.stringify(err));
      // Error log
    });
  	
  }

}
