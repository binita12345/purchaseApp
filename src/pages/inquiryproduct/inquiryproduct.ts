import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
/**
 * Generated class for the InquiryproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inquiryproduct',
  templateUrl: 'inquiryproduct.html',
})
export class InquiryproductPage {

  name : any;
  email : any;
  subjects : any;
  inquiries : any;
  id : any;
  productid : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public serviceProvider: ServiceProvider,
    private alertCtrl: AlertController, private loader: Loader) {
    this.storage.get("userData").then(userData => {
      console.log("inquiry userData" +JSON.stringify(userData));
      this.id = userData.data.ID;
      this.name = userData.data.name;
      this.email = userData.data.email;
    });

    this.productid = navParams.get('productId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InquiryproductPage');
  }
  submit(){

    this.loader.show("Adding inquiry");
    // this.navCtrl.push("HomeappPage");
    console.log("inquiry name" +this.name);
    console.log("inquiry email" +this.email);
    console.log("inquiry subjects" +this.subjects);
    console.log("inquiry inquiries" +this.inquiries);
    console.log("inquiry productid" +this.productid);

    let inquiryObj = {
      "ID": this.id,
      "productid": this.productid,
      "name": this.name,
      "email": this.email,
      "subject": this.subjects,
      "inquiry": this.inquiries
    }

    this.serviceProvider.inquiryAddProducts(inquiryObj).then((result) => {
      console.log("result inquiry product" +JSON.stringify(result));
      
      if(result["status"] == 1){
        this.loader.hide();
        let alert = this.alertCtrl.create({
          subTitle: result["message"],
          buttons: [
            {
              text: 'OK',
              handler: () => {
                  console.log('OK clicked');
                  this.navCtrl.push("HomeappPage");
              }
            }
          ]
        });
        alert.present();
      } else if(result["status"] == 0) {
        this.loader.hide();
        let alert = this.alertCtrl.create({
          subTitle: result["message"],
          buttons: ['Ok']
        });
        alert.present();
      }
    }, (err) => {
      console.log("err inquiry products" +JSON.stringify(err));
      // Error log
    });

  }  

}
