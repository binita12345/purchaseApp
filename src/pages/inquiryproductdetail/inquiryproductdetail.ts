import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { Storage } from '@ionic/storage';
import { Loader } from "../../providers/loader/loader";
/**
 * Generated class for the InquiryproductdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inquiryproductdetail',
  templateUrl: 'inquiryproductdetail.html',
})
export class InquiryproductdetailPage {
  lists : any = [];
  id: any;
  inquiryDataArray : any = [];
  // addReply : boolean = false;
  addReply : boolean;
  nodata : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public serviceProvider: ServiceProvider, public storage: Storage, private loader: Loader,
    private alertCtrl: AlertController) {

    // this.lists = [{'name':"User Name", 'productname':"Product Name",'desc': "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"},
    // {'name':"User Name", 'productname':"Product Name", 'desc': "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"},
    // {'name':"User Name", 'productname':"Product Name", 'desc': "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration"}]

    this.inquiryListService();
  }

  inquiryListService() {

    this.loader.show("retrieving inquiries");
    this.storage.get("userData").then(userData => {
      console.log("userData in list" +JSON.stringify(userData));
      this.id = userData.data.ID;
      console.log("this.id inq list" +this.id);
      let inquiryObj = {
        "ID": this.id
      }
      // if(this.serviceProvider.getNetworkType() == 'none') {
      //   this.loader.hide();
      //   // console.log('network was disconnected :-(');
      //   let alert = this.alertCtrl.create({
      //     title: 'Oops!',
      //     subTitle: "You seem to be offline ! Please Enable network to get review list",
      //     buttons: [{
      //       text: ("Okay")
      //     }]
      //   });
      //   alert.present();
      // } else {
        this.serviceProvider.inquiryProductsList(inquiryObj).then((result) => {
          console.log("result inquiry product" +JSON.stringify(result));

          if(result["status"] == 1) {
            this.loader.hide();
            this.nodata = false;
            this.inquiryDataArray = result["data"];
          } else if(result["status"] == 0){
            this.loader.hide();
            this.nodata = true;
            this.inquiryDataArray = [];
          } else {

          }
          
          
          // if(result["status"] == 1){
          //   this.loader.hide();
          //   let alert = this.alertCtrl.create({
          //     subTitle: result["message"],
          //     buttons: [
          //       {
          //         text: 'OK',
          //         handler: () => {
          //             console.log('OK clicked');
          //             this.navCtrl.push("HomeappPage");
          //         }
          //       }
          //     ]
          //   });
          //   alert.present();
          // } else if(result["status"] == 0) {
          //   this.loader.hide();
          //   let alert = this.alertCtrl.create({
          //     subTitle: result["message"],
          //     buttons: ['Ok']
          //   });
          //   alert.present();
          // }
        }, (err) => {
          console.log("err inquiry products" +JSON.stringify(err));
          // Error log
        });
      // }
    });
  }

  replyofInquiry() {
    console.log("reply to product");
    this.addReply = !this.addReply;
  }

  postReply(inquiry) {
    console.log("post reply", inquiry);
    // this.addReply = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InquiryproductdetailPage');
  }

  statusChanged(event) {

    console.log("event", event.value);
    if(event.value == "home"){
      this.navCtrl.push("HomeappPage");
    } else if(event.value == "shopping"){
      this.navCtrl.push("CartlistPage");
    } else if(event.value == "request"){
      this.navCtrl.push("RequestlistPage");
    } else if(event.value == "profile"){
      this.navCtrl.push("ProfilePage");
    } else if(event.value == "notification"){
      this.navCtrl.push("NotificationPage");
    } else if(event.value == "inquiry"){
      this.navCtrl.push("InquiryproductdetailPage");
    } else if(event.value == "invitation"){
      this.navCtrl.push("InvitefriendsPage");
    } else if(event.value == "changepwd"){
      this.navCtrl.push("ChangepasswordPage");
    } else {
      
    }
  }
  // gotoHome(){
  // 	this.navCtrl.push("HomeappPage");
  // }
  // gotoCart(){
  // 	this.navCtrl.push("CartlistPage");
  // }
  // gotoRequest(){
  // 	this.navCtrl.push("RequestlistPage");
  // }
  // gotoProfile(){
  // 	this.navCtrl.push("ProfilePage");
  // }
  // gotoNotification(){
  // 	this.navCtrl.push("NotificationPage");
  // }
  // gotoInquiryProduct(){
  // 	this.navCtrl.push("InquiryproductdetailPage");
  // }
  // gotoInviteFriend(){
  // 	this.navCtrl.push("InvitefriendsPage");
  // }
  // gotoChangePassword(){
  // 	this.navCtrl.push("ChangepasswordPage");
  // }

}
