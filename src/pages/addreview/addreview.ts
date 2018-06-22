import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
import { Storage } from '@ionic/storage';
/**
 * Generated class for the AddreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addreview',
  templateUrl: 'addreview.html',
})
export class AddreviewPage {
	// public addReviewFrom:FormGroup;
  ratings : any;
  id : any;
  userid : any;
  comments : any;
  orderid : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public serviceProvider: ServiceProvider, 
    private loader: Loader, private alertCtrl: AlertController) {

    this.storage.get("userData").then(userData => {
      this.id = userData.data.ID;
    });
    this.userid = navParams.get('reviewUserid');
    this.storage.get("orderid").then(getOrderId => {
      this.orderid = getOrderId;
      console.log("review orderid" +JSON.stringify(this.orderid));
    });
    // this.orderid = navParams.get('orderid');
    // console.log(this.comments);
    // console.log(this.ratings);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddreviewPage');
  }

  submit(){
    this.loader.show("Please Wait");
    console.log(this.id);
    console.log(this.orderid);
    console.log(this.comments);
    console.log(this.ratings);

    let reviewObj = {
      "ID": this.id,
      "userid": this.userid,
      "orderid": this.orderid,
      "reviewStar": this.ratings,
      "reviewContent": this.comments
    }

    this.serviceProvider.addReviewData(reviewObj).then((result) => {
      console.log("result addReviewData" +JSON.stringify(result));

      if(result["status"] == 1) {
        // console.log("signup status 1", result["message"]);
        this.loader.hide();
        let alert = this.alertCtrl.create({
          subTitle: result["message"],
          buttons: [
            {
              text: 'OK',
              handler: () => {
                console.log('ok clicked');
                // let ratings = {'ratings':this.ratings}
                console.log("review page this.orderid" +this.orderid);
                console.log("review page this.ratings" +this.ratings);

                this.storage.set('reviewStar', this.ratings);
                // this.storage.set('orderid', this.orderid);
                
                this.navCtrl.push("RequestlistPage");
                // this.navCtrl.push("RequestlistPage", {'userid' : this.userid, 'reviewStar': this.ratings});
              }
            }
          ]
        });
        alert.present();
      } else {
        this.loader.hide();
      }
    }, (err) => {
      console.log("err addReviewData" +JSON.stringify(err));
      // Error log
    });

  	
  }
  onModelChange(event){
  	console.log("event star" +JSON.stringify(event));
    this.ratings = event;
    // console.log("event value..." +JSON.stringify(event.value));
  }

  gotoHome(){
  	this.navCtrl.push("HomeappPage");
  }
  gotoCart(){
  	this.navCtrl.push("CartlistPage");
  }
  gotoRequest(){
  	this.navCtrl.push("RequestlistPage");
  }
  gotoProfile(){
  	this.navCtrl.push("ProfilePage");
  }
  gotoNotification(){
  	this.navCtrl.push("NotificationPage");
  }
  gotoInquiryProduct(){
  	this.navCtrl.push("InquiryproductdetailPage");
  }
  gotoInviteFriend(){
  	this.navCtrl.push("InvitefriendsPage");
  }
  gotoChangePassword(){
  	this.navCtrl.push("ChangepasswordPage");
  }

}
