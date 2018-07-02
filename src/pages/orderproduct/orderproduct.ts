import { Component, ViewChild, NgZone, ElementRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service/service';
import * as _ from 'lodash';
import { Loader } from "../../providers/loader/loader";
import { } from 'googlemaps';
import {FormControl} from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
/**
 * Generated class for the OrderproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderproduct',
  templateUrl: 'orderproduct.html',
})
export class OrderproductPage {
	lists : any = [];
  selectedbox : boolean;
  selectedSupplier : boolean;
  supplierArray : any =[];
  getSup : any;
  suppArray : any = [];
  id : any;
  address : any;
  contact : any;
  payment : any;
  havingcar : any;
  list : any;
  productId : any;
  // tap: any = [];
  // tap: Array<number>;
  quantity = 1;
  productdetail : any=[];
  newarray = [];
  filtered : any;
  error : any = '';
  private quantities: number[];
  amount : any;
  total : any;

  public searchControl: FormControl;
  public latitude: number;
  public longitude: number;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public serviceProvider: ServiceProvider,
    private loader: Loader, private alertCtrl: AlertController, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {
  	// this.lists = [{'image' : "assets/imgs/bgcolor.png", 'name':"Product names", 'price': "$512"},
   //  {'image' : "assets/imgs/bgcolor.png", 'name':"Product names", 'price': "$512"}]
    // this.supplierArray = navParams.get('supplierarray');
    // console.log("this.supplierArray" +JSON.stringify(this.supplierArray));
    // for(let supid of this.supplierId) {
    //   console.log("supid....." +JSON.stringify(supid));
    //   this.getSup = supid.ID;
    //   console.log("this.getSup....." +JSON.stringify(this.getSup));
    //   this.suppArray.push(this.getSup);
    //   console.log("this.suppArray....." +JSON.stringify(this.suppArray));
    // }

    this.searchControl = new FormControl();
    this.setCurrentPosition();

    this.storage.get("userData").then(userData => {
      // console.log("userData" +JSON.stringify(userData));
      this.id = userData.data.ID;
      // console.log("this.id" +this.id);
    });
    
    this.storage.get("selectedSupplierArray").then(getSelectedSupplierArray => {
      // console.log("getSelectedSupplierArray" +JSON.stringify(getSelectedSupplierArray));
      for(let supid of getSelectedSupplierArray) {
        // console.log("supid....." +JSON.stringify(supid));
        this.selectedSupplier = supid.selected;
        if(this.selectedSupplier == true) {
          this.getSup = supid.ID;
          console.log("this.getSup....." +JSON.stringify(this.getSup));
          this.suppArray.push(this.getSup);
          // console.log("this.suppArray....." +JSON.stringify(this.suppArray));
        }
        
      }
    });
    
    this.storage.get("selectedArray").then(getSelectedArray => {
      // console.log("getSelectedArray" +JSON.stringify(getSelectedArray));
      for (let array of getSelectedArray) {
        // console.log("array....." +JSON.stringify(array));
        this.selectedbox = array.selected;
        // console.log("this.selectedbox....." +JSON.stringify(this.selectedbox));
        if(this.selectedbox == true) {
          // console.log("if true");
          // this.quantity = 1; 
          this.lists = getSelectedArray;
          // this.lists.push(this.quantity);
          // this.lists.foreach(product => { 
          //   console.log("product......" +JSON.stringify(product));
          //   this.quantity = 0; 
          // });
          // console.log("this.lists....." +JSON.stringify(this.lists));
          let totalPrice = 0;
          for (let list of this.lists) {
            console.log("list........" +JSON.stringify(list));
            this.productId = list.productid;
            // console.log("this.productId........" +JSON.stringify(this.productId));
            console.log("list quantity......." +JSON.stringify(this.quantity));
            this.amount = list.amount;
            console.log("list amount......." +JSON.stringify(this.amount));
            // totalPrice = this.amount * this.quantity;
            // this.total = totalPrice;
            // console.log("list total......." +JSON.stringify(this.total));

            let detailProduct = {
              'productid': this.productId,
              'quantity' : this.quantity,
              'amount' : this.amount
            }
            // console.log("detailProduct" +JSON.stringify(detailProduct));
            this.productdetail.push(detailProduct);
            // console.log("product detail" +JSON.stringify(this.productdetail));
            
            this.filtered =  _.uniqWith(this.productdetail, _.isEqual);

            

            // for(let i=0; i < this.productdetail.length; i++)
            // {
            //     if(this.newarray.indexOf(this.productdetail[i]) == -1)
            //         this.newarray.push(this.productdetail[i]);
            // }
            // console.log("this.newarray......." +JSON.stringify(this.newarray));
          }
          console.log("this.filtered" +JSON.stringify(this.filtered));
          // this.filtered.foreach(product => { 
          //   console.log("product filtered......" +JSON.stringify(product));
          //   // product.quantity = 0; 
          // });
        } else {
          // console.log("else false");
          this.lists = [];
        }
      }
      // this.lists = getSelectedArray;
    });
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad orderproductPage');

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let nativeHomeInputBox = document.getElementById('txtHome').getElementsByTagName('input')[0];
      let autocomplete = new google.maps.places.Autocomplete(nativeHomeInputBox, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
          console.log("autocomplete places" +JSON.stringify(place));
          this.address = place.formatted_address;
          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  incrementQty(index:number){
    // console.log("increment index" +index);
    // console.log("increment index qty" +this.productdetail[index].quantity);
    this.productdetail[index].quantity += 1;
    // console.log("increment qty......" +this.productdetail[index].quantity);
    this.total = this.productdetail[index].amount * this.productdetail[index].quantity;
    // console.log("increment total......" +this.total);
  }

  decrementQty(index:number){
    // console.log("decrement index" +index);
    // console.log("decrement index qty" +this.productdetail[index].quantity);
    if(this.productdetail[index].quantity > 1) {
      this.productdetail[index].quantity -= 1;
      // console.log("decrement qty......" +this.productdetail[index].quantity);
      this.total = this.productdetail[index].amount * this.productdetail[index].quantity;
      // console.log("increment total......" +this.total);
    }
  }

  closeProduct(list) {
    // console.log("list" +list);
    let index = this.lists.indexOf(list);
    // console.log("index" +index);
    if(index > -1){
      this.lists.splice(index, 1);
      // console.log("this.lists" +JSON.stringify(this.lists));
    }
  }

  placeOrder() {

    // if(this.serviceProvider.getNetworkType() == 'none') {
    //   // console.log('network was disconnected :-(');
    //   let alert = this.alertCtrl.create({
    //     title: 'Oops!',
    //     subTitle: "You seem to be offline ! Please Enable network to place the order.",
    //     buttons: [{
    //       text: ("Okay")
    //     }]
    //   });
    //   alert.present();
    // } else {
      this.error = '';
      this.loader.show("Please Wait");

      // console.log("order place");
      console.log("this.filtered" +JSON.stringify(this.filtered));
      // console.log("this.address" +this.address);
      // console.log("this.contact" +this.contact);
      // console.log("this.payment" +this.payment);
      // console.log("this.havingcar" +this.havingcar);
      // console.log("quantity" +this.quantity);
      // console.log("this.getSup....." +JSON.stringify(this.getSup));
      // console.log("order suppArray....." +JSON.stringify(this.suppArray));
      // console.log(this.suppArray.toString());
      let placeData = {
        "ID": this.id,
        "ProductDetails": this.filtered,
        "supplierid": this.suppArray.toString(),
        "address": this.address,
        "contact": this.contact,
        "payType": this.payment,
        "carUse": this.havingcar
      }
      console.log("placeData....." +JSON.stringify(placeData));
      this.serviceProvider.orderPlace(placeData).then((result) => {
        console.log("result place order" +JSON.stringify(result));

        if(result["status"] == 2){
          this.loader.hide();
          this.error = result["message"];

        } else if(result["status"] == 1){
          this.loader.hide();
          let alert = this.alertCtrl.create({
            subTitle: result["message"],
            buttons: [
              {
                text: 'OK',
                handler: () => {
                  console.log('ok clicked');
                  
                  this.navCtrl.push("RequestlistPage");
                }
              }
            ]
          });
          alert.present();
        }
      }, (err) => {
        console.log("err order place" +JSON.stringify(err));
        // Error log
      });
    // }

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
  // gotoRequestlist(){
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
