import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
/**
 * Generated class for the RequestlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-requestlist',
  templateUrl: 'requestlist.html',
})
export class RequestlistPage {
  deliveryrequests : any = [];
  userrequests : any = [];
  requests : any;
  delivery : boolean = true;
  open : boolean = false;
  close : boolean = false;
  userrequest : boolean = false;
  showOnlyForUser : boolean; 
  showForBoth : boolean;
  customerLogin : any;
  bothLogin : any;
  supplierLogin : any;
  forUserContent : any;
  forSupplierContent : any;
  forBothContent : any;
  forSupplier : boolean = true;
  userType: any;
  id : any;
  error : any = '';
  productdetail : any = [];
  amount : any;
  quantity : any;
  count : any;
  totalPrice : any = 0;
  totalSum : any;
  // arraysum : any = [];
  // amountArray : any = [];
  // mergeArray : any = [];
  // summation : any;
  accepted : any;
  accept : boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public serviceProvider: ServiceProvider,
    private loader: Loader, private alertCtrl: AlertController, public toastCtrl: ToastController) {
    // this.lists = [{'image' : "assets/imgs/bgcolor.png", 'name':"User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    // {'image' : "assets/imgs/bgcolor.png", 'name':"User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    // {'image' : "assets/imgs/bgcolor.png", 'name':"User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    // {'image' : "assets/imgs/bgcolor.png", 'name':"User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"}]
    // this.lists = [{'orderid':"6485764856gdf", 'time':"12:54:39 P.M.", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    // {'orderid':"6485764856gdf", 'time':"12:54:39 P.M.", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    // {'orderid':"6485764856gdf", 'time':"12:54:39 P.M.", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    // {'orderid':"6485764856gdf", 'time':"12:54:39 P.M.", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"}]
    
    this.requests = "delivery";
    this.getRequestList();
  }

  getRequestList() {
     this.storage.get("userData").then(userData => {
      // console.log("userData" +JSON.stringify(userData));

      this.id = userData.data.ID;

      let reqObj = {
         "ID": this.id,
      }
      this.serviceProvider.requestListData(reqObj).then((result) => {
        // console.log("result request list" +JSON.stringify(result));

        if(result["status"] == 1){
          this.loader.hide();
          this.deliveryrequests = result["data"].deliveryRequest;
          // console.log("get request list" +JSON.stringify(this.deliveryrequests));

          this.userrequests = result["data"].userRequest;
          // console.log("get user request list" +JSON.stringify(this.userrequests));
          
          for(let products of this.deliveryrequests) {
            // console.log("get products......" +JSON.stringify(products));
            this.productdetail = products.productDetails;
            // console.log("this.productdetail......" +JSON.stringify(this.productdetail));
            let totalPrice = 0;
            let stringArray : any = [];
            for(let detail of this.productdetail) {
              // console.log("get detail......" +JSON.stringify(detail));
              this.amount = detail.amount;
              this.quantity = detail.quantity;
              this.count = this.amount * this.quantity;
              // console.log("this.count......" +JSON.stringify(this.count));

              totalPrice += this.count;
              this.totalSum = totalPrice;
              // console.log("totalPrice......" +JSON.stringify(this.totalPrice));
              // console.log("this.totalSum......" +this.totalSum);  
              
            }
            // stringArray.push({'totalSum': this.totalSum});
            // console.log("this.stringArray......" +JSON.stringify(stringArray));
            // this.deliveryrequests.push(stringArray);
            // console.log("this.deliveryrequests......" +JSON.stringify(this.deliveryrequests)); 
            // this.deliveryrequests.push({'totalSum': this.totalSum});
            // console.log("get request list" +JSON.stringify(this.deliveryrequests));
            // let sum = {
            //   'total': this.totalSum
            // }
            // console.log("sum......" +JSON.stringify(sum));
            // // stringArray.push(sum);
            // // console.log("this.stringArray......" +JSON.stringify(stringArray));
            // this.amountArray.push(sum);
            // console.log("this.amountArray......" +JSON.stringify(this.amountArray));
            // this.deliveryrequests.push(this.totalSum);
            // console.log("get request list" +JSON.stringify(this.deliveryrequests));
            // this.amountArray.push(sum);
            // console.log("this.amountArray......" +JSON.stringify(this.amountArray)); 
            
            // stringArray.push(sum);
            // console.log("this.stringArray......" +JSON.stringify(stringArray));
            // this.amountArray = stringArray;
            // console.log("this.amountArray......" +JSON.stringify(this.amountArray)); 
            // this.mergeArray.push(sum);
            // console.log("this.mergeArray......" +JSON.stringify(this.mergeArray));
            // this.total = this.totalPrice;
            // console.log("this.total......" +this.total);  
          }
          
          
        } else {
          this.loader.hide();
        }
      }, (err) => {
        console.log("err request list" +JSON.stringify(err));
        // Error log
      });

      this.userType = userData.data.user_type;
      if (this.userType == "CUSTOMER") {
        this.forUserContent = true;
        this.forSupplierContent =false;
        this.forBothContent = false;
        this.showOnlyForUser = true;
        this.showForBoth = false;

      } else if (this.userType == "SUPPLIER") {
        this.forUserContent = false;
        this.forSupplierContent =true;
        this.forBothContent = false;
        this.showOnlyForUser = false;
        this.showForBoth = false;
        this.forSupplier = false;

      } else if (this.userType == "USER") {
        this.forUserContent = false;
        this.forSupplierContent =false;
        this.forBothContent = true;
        this.showOnlyForUser = false;
        this.showForBoth = true;

      } else {
      }
    });
  }

  deleteOrder(orderId) {
    console.log("orderId...." +orderId);

    let deleteData = {
       "orderid": orderId
    }
    let alert = this.alertCtrl.create({
      title: 'Confirm delete order',
      message: 'Are you sure you want to permanently delete this order?',
      buttons: [
          {
              text: 'No',
              handler: () => {
                  console.log('Cancel clicked');
              }
          },
          {
              text: 'Yes',
              handler: () => {
                console.log('ok clicked');
                this.serviceProvider.deleteOrderData(deleteData).then((result) => {
                  console.log("result delete order" +JSON.stringify(result));
                  
                  if(result["status"] == 1){
                    this.loader.hide();     
                      let toastSuccess = this.toastCtrl.create({
                      message: result["message"],
                      duration: 7000,
                      position: 'top',
                      showCloseButton:true,
                      closeButtonText:'X',
                      cssClass: "toast-success",
                    });
                    toastSuccess.present();
                    this.getRequestList();
                  }

                }, (err) => {
                  console.log("err delete records" +JSON.stringify(err));
                  // Error log
                });
              }
          }
      ]
    });
    alert.present();
      
  }

  statusChanged(event) {

    console.log("event", event.value);
    if(event.value == "delivery"){
      this.delivery = true;
      this.open = false;
      this.close = false;
      this.userrequest = false;
      console.log("this.deliveryrequests...1", this.deliveryrequests);
      this.getRequestList();
    } else if(event.value == "open"){
      this.delivery = false;
      this.open = true;
      this.close = false;
      this.userrequest = false;
      console.log("this.deliveryrequests...2", this.deliveryrequests);
      this.getRequestList();
    } else if(event.value == "close"){
      this.delivery = false;
      this.open = false;
      this.close = true;
      this.userrequest = false;
      console.log("this.deliveryrequests...3", this.deliveryrequests);
      this.getRequestList();
    } else if(event.value == "userrequest"){
      this.delivery = false;
      this.open = false;
      this.close = false;
      this.userrequest = true;
      console.log("this.userrequests...4", this.userrequests);
      this.getRequestList();

    } else {
      this.delivery = true;
      this.open = false;
      this.close = false;
      this.userrequest = false;
      console.log("this.deliveryrequests...5", this.deliveryrequests);
    }
  }

  accepttoshowList(reqOrederId) {
    console.log("reqOrederId....." +JSON.stringify(reqOrederId));
    this.accept = false;
    this.accepted = true;
    this.storage.set('accept', this.accepted);
    let acceptData = {
      "ID": this.id,
      "orderid": reqOrederId,
      "orderType": "ACCEPT"
    }
    this.serviceProvider.acceptOrderData(acceptData).then((result) => {
      console.log("result accepted list" +JSON.stringify(result));
      if(result["status"] == 1) {
        this.loader.hide();
        let alert = this.alertCtrl.create({
          subTitle: result["message"],
          buttons: [
            {
              text: 'OK',
              handler: () => {
                console.log('ok clicked');
                this.getRequestList();
                // this.accept = false;
                // this.accepted = true;
                this.navCtrl.push("ListproductPage", {'productdetail' : reqOrederId});
              }
            }
          ]
        });
        alert.present();
      } else {

      }
    }, (err) => {
      console.log("err accepted list" +JSON.stringify(err));
      // Error log
    });
    // this.getRequestList();

    // this.navCtrl.push("ListproductPage", {'productdetail' : requests.productDetails});
  }

  addreview(){
    this.navCtrl.push("AddreviewPage");
  }
  gotorequestDetail(list){
    console.log("requested list......" +JSON.stringify(list.productDetails));
    this.navCtrl.push("RequestdetailPage", { 'productdetail': list.productDetails });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestlistPage');
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
