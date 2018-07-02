import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
/**
 * Generated class for the SupplierlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-supplierlist',
  templateUrl: 'supplierlist.html',
})
export class SupplierlistPage {

	lists : any = [];
  id : any;
  checked = [];
  selectedSupplierArray : any = [];
  supplierid : any;
  supplierArray : any = [];
  // newarray : any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public serviceProvider: ServiceProvider,
    private loader: Loader, private alertCtrl: AlertController) {

  	// this.lists = [{'image': "assets/imgs/user.png", 'desc': "Nevine Acotanza"},
   //  {'image': "assets/imgs/user.png", 'desc': "Oluwarotimi Adesina"},
   //  {'image': "assets/imgs/user.png", 'desc': "Fabrizio Cedrone"}]
    
    this.storage.get("userData").then(userData => {
      // console.log("userData" +JSON.stringify(userData));
      this.id = userData.data.ID;
      // console.log("this.id" +this.id);
      
      this.getSupplierListData();
      // this.storage.remove("selectedSupplierArray");
    });

  }

  // //Adds the checkedbox to the array and check if you unchecked it
  // addCheckbox(event, checkbox : String) { 
  //   console.log("checkbox" +JSON.stringify(checkbox));
  //     if ( event.target.checked ) {
  //       this.checked.push(checkbox);
  //       console.log("this.checked" +JSON.stringify(this.checked));
  //     } else {
  //       let index = this.removeCheckedFromArray(checkbox);
  //       console.log("index" +index);
  //       this.checked.splice(index,1);
  //     }
  //   }

  //   //Removes checkbox from array when you uncheck it
  //   removeCheckedFromArray(checkbox : String) {
  //     console.log("remove checkbox....." +JSON.stringify(checkbox));
  //     return this.checked.findIndex((category)=>{
  //       console.log("category.........." +JSON.stringify(category));
  //       return category === checkbox;
  //     })
  //   }

  //   //Empties array with checkedboxes
  //   emptyCheckedArray() {
  //     console.log("empty checked array");
  //     this.checked = [];
  //   }

  //  getCheckedBoxes() {
  //    //Do whatever
  //    console.log("getCheckedBoxes");
  //    console.log("get check this.checked..... " +JSON.stringify(this.checked));
  //  }

  selectSupplier(data) {
    // console.log("selected data" +JSON.stringify(data));
    if (data.selected == true) {
      this.selectedSupplierArray.push(data);
      // console.log("Supplier Array" +JSON.stringify(this.selectedSupplierArray));
    } else {
      let newArray = this.selectedSupplierArray.filter(function(el) {
        // console.log("supplier el..............." +JSON.stringify(el));
        // if(el.selected == true) {
        //   console.log("get el...." +JSON.stringify(el));
        // }
        return el.ID !== data.ID;

      });
      this.selectedSupplierArray = newArray;
    }
    // console.log("this.selectedSupplierArray........." +JSON.stringify(this.selectedSupplierArray));
    this.storage.set("selectedSupplierArray", this.selectedSupplierArray);
    // for(let supplier of this.selectedSupplierArray) {
    //   console.log("supplier........." +JSON.stringify(supplier));
    //   this.supplierid  = supplier.ID;
    //   console.log(" this.supplierid........." +JSON.stringify(this.supplierid));
      
    // }
    // this.supplierArray.push(this.supplierid);
    // console.log(" this.supplierArray........." +JSON.stringify(this.supplierArray));
    // this.newarray = this.supplierArray.reduce(function(res, ele) {
    // if(res.indexOf(ele)==-1)
    //    res.push(ele);
    //   return res;
    //   }, [])
    // console.log("this.newarray........." +JSON.stringify(this.newarray));
   // this.storage.set("selectedArray", this.selectedArray);
    // this.selectedAll = this.lists.every(function(item:any) {
    //     return item.selected == true;
    //   })
  }

  getSupplierListData() {
    // if(this.serviceProvider.getNetworkType() == 'none') {
    //   // console.log('network was disconnected :-(');
    //   let alert = this.alertCtrl.create({
    //     title: 'Oops!',
    //     subTitle: "You seem to be offline ! Please Enable network to get products list",
    //     buttons: [{
    //       text: ("Okay")
    //     }]
    //   });
    //   alert.present();
    // } else {
      this.loader.show("Retrieving suppliers...");
      console.log("getSupplierListData");
      // console.log("this.id....." +this.id);
      let getId = {
        "ID" : this.id
      }
      // console.log("getId" +JSON.stringify(getId));
      this.serviceProvider.getSupplierList(getId).then((result) => {
        // console.log("result products list" +JSON.stringify(result));
        if(result["status"] == 1) {
          this.loader.hide();
          this.lists = result["data"];
          // console.log("lists of product" +JSON.stringify(this.lists));
        }
        // this.getProfileData();
      }, (err) => {
        console.log("err product list" +JSON.stringify(err));
        // Error log
      });
    // }
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupplierlistPage');
    
  }

  gotoOrderProduct(){
    // console.log("go order product this.selectedSupplierArray........." +JSON.stringify(this.selectedSupplierArray));
  	this.navCtrl.push("OrderproductPage");
  }

  statusChanged(event) {

    console.log("event", event.value);
    if(event.value == "home"){
      this.navCtrl.push("HomeappPage");
    } else if(event.value == "shopping"){
      this.navCtrl.push("CartlistPage");
    } else if(event.value == "request"){
      this.navCtrl.push("SupplierlistPage");
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
  // gotoSupplier(){
  // 	this.navCtrl.push("SupplierlistPage");
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
