import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service/service';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public serviceProvider: ServiceProvider) {

  	// this.lists = [{'image': "assets/imgs/user.png", 'desc': "Nevine Acotanza"},
   //  {'image': "assets/imgs/user.png", 'desc': "Oluwarotimi Adesina"},
   //  {'image': "assets/imgs/user.png", 'desc': "Fabrizio Cedrone"}]
     this.storage.get("userData").then(userData => {
      // console.log("userData" +JSON.stringify(userData));
      this.id = userData.data.ID;
      // console.log("this.id" +this.id);
      
      this.getSupplierListData();
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
    console.log("selected data" +JSON.stringify(data));
    if (data.selected == true) {
      this.selectedSupplierArray.push(data);
      console.log("this.selectedSupplierArray" +JSON.stringify(this.selectedSupplierArray));
    } else {
      let newArray = this.selectedSupplierArray.filter(function(el) {
        console.log("el..............." +JSON.stringify(el));
        return el.supplierid !== data.supplierid;
      });
      this.selectedSupplierArray = newArray;
    }
    console.log("this.selectedSupplierArray........." +JSON.stringify(this.selectedSupplierArray));
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
    console.log("getSupplierListData");
    // console.log("this.id....." +this.id);
    let getId = {
      'ID' : this.id
    }
    // console.log("getId" +JSON.stringify(getId));
    this.serviceProvider.getSupplierList(getId).then((result) => {
      // console.log("result products list" +JSON.stringify(result));
      if(result["status"] == 1) {
        this.lists = result["data"];
        // console.log("lists of product" +JSON.stringify(this.lists));
      }
      // this.getProfileData();
    }, (err) => {
      console.log("err product list" +JSON.stringify(err));
      // Error log
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SupplierlistPage');
  }

  gotoOrderProduct(){
    console.log("go order product this.selectedSupplierArray........." +JSON.stringify(this.selectedSupplierArray));
  	this.navCtrl.push("OrderproductPage", {'supplierid' : this.selectedSupplierArray});
  }

  gotoHome(){
  	// let myDiv = document.getElementById('target1');
  	
  	this.navCtrl.push("HomeappPage");
  	// document.getElementById("target1").style.background = "#000000";
  }
  gotoCart(){
  	this.navCtrl.push("CartlistPage");
  	// document.getElementById("target2").style.background = "#000000";
  }
  gotoSupplier(){
  	this.navCtrl.push("SupplierlistPage");
  }
  gotoProfile(){
  	this.navCtrl.push("ProfilePage");
  	// document.getElementById("target4").style.background = "#000000";
  }
  gotoNotification(){
  	this.navCtrl.push("NotificationPage");
  	// document.getElementById("target5").style.background = "#000000";
  }
  gotoInquiryProduct(){
  	this.navCtrl.push("InquiryproductdetailPage");
  	// document.getElementById("target6").style.background = "#000000";
  }
  gotoInviteFriend(){
  	this.navCtrl.push("InvitefriendsPage");
  	// document.getElementById("target7").style.background = "#000000";
  }
  gotoChangePassword(){
  	this.navCtrl.push("ChangepasswordPage");
  	// document.getElementById("target8").style.background = "#000000";
  }

}
