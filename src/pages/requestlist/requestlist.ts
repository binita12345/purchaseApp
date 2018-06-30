import { Component, NgZone, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
import { Location } from '@angular/common';
import { Geolocation, GeolocationOptions } from '@ionic-native/geolocation';
import { googlemaps } from 'googlemaps';
import { NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult } from '@ionic-native/native-geocoder';
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

  @ViewChild('map') mapElement: ElementRef;
  deliveryrequests : any = [];
  userrequests : any;
  openrelations : any = [];
  closerelations : any = [];

  userrequestArray : any;

  requests : any;
  delivery : boolean = true;
  open : boolean = false;
  close : boolean = false;
  userrequest : boolean = false;

  showOnlyForUser : boolean; 
  showForBoth : boolean;

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
  totalSum : any;
  totalprice : any;

  ownUser : any;
  anotherUser: any;
  orderid : any;

  beforeAccept : boolean;
  afterAccept : boolean;

  currentLatitude : any;
  currentLongitude : any;
  orderAdd : any;
  // public addressDistance: any[];
  // radiusDistance : any;

  

  map:any;
  latLng:any;
  markers:any;
  mapOptions:any;  
  isKM:any=500;
  isType:any="";
  // accept : boolean;

  // customerLogin : any;
  // bothLogin : any;
  // supplierLogin : any;

  // stardetail : any = [];
  // totalPrice : any = 0;
  // reqIdentify : any;
  // openproduct : any;
  // closeRelation : any;
  // ratings: any;
  

  // star : boolean = false;
  // listorderId : any;
  // arraysum : any = [];
  // amountArray : any = [];
  // mergeArray : any = [];
  // summation : any;
  // accepted : any;
  // accept : boolean = true;
  // reviewOrderId : any;
  // reviewUserId: any;
  // closeUserId : any;
  // starRate : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public serviceProvider: ServiceProvider,
    private loader: Loader, private alertCtrl: AlertController, public toastCtrl: ToastController, private location: Location,
    public nativeGeocoder: NativeGeocoder, private ngZone: NgZone, private geolocation : Geolocation) {
    // this.lists = [{'image' : "assets/imgs/bgcolor.png", 'name':"User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    // {'image' : "assets/imgs/bgcolor.png", 'name':"User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    // {'image' : "assets/imgs/bgcolor.png", 'name':"User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    // {'image' : "assets/imgs/bgcolor.png", 'name':"User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"}]
    // this.lists = [{'orderid':"6485764856gdf", 'time':"12:54:39 P.M.", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    // {'orderid':"6485764856gdf", 'time':"12:54:39 P.M.", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    // {'orderid':"6485764856gdf", 'time':"12:54:39 P.M.", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"},
    // {'orderid':"6485764856gdf", 'time':"12:54:39 P.M.", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12"}]
    // this.storage.get("totalSum").then(totalPrice => {
    //   this.totalprice = totalPrice;
    //   console.log("this.totalprice list products" +this.totalprice);
    // });
    // this.ratings = navParams.get('reviewStar');
    // console.log("review ratings" +this.ratings);
    // this.supplierid = navParams.get('userid');
    // console.log("review supplierid" +this.supplierid);
    // this.storage.get("reviewStar").then(ratings => {
    //   this.ratings = ratings;
    //   this.star = this.ratings;
    //   console.log("review ratings" +this.ratings);
    // });
    

    this.storage.get("orderid").then(orderId => {
      this.orderid = orderId;
      console.log("review orderid" +this.orderid);
    });

    this.requests = "delivery";
    this.getCurrentLocation()
    this.getRequestList();
    // this.distanceAddresses()
    
    this.ownUser = "Your Request";
    this.anotherUser = "Deliver Request";
    // if(this.ownUser) {
    //   this.closeRelation = true;
    // } else if(this.anotherUser){
    //   this.closeRelation = false;
    // }
  }

  // distanceAddresses() {
  //   this.addressDistance = [
  //       {id: 1, name: '5 KM'},
  //       {id: 2, name: '10 KM'},
  //       {id: 3, name: '15 KM'},
  //       {id: 4, name: '20 KM'},
  //       {id: 5, name: '25 KM'},
  //       {id: 6, name: '30 KM'}
  //   ];
  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequestlistPage');
    // this.loadMap();
  }

  // loadMap(){

  //   this.geolocation.getCurrentPosition().then((position) => {

  //     this.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

  //               console.log('latLng',this.latLng);
           
  //           this.mapOptions = {
  //             center: this.latLng,
  //             zoom: 14,
  //             mapTypeId: google.maps.MapTypeId.ROADMAP
  //           }   

  //     this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);

  //   }, (err) => {
  //     alert('err '+err);
  //   });

  // }

  // nearbyPlace() {
  //   this.loadMap();
  //   this.markers = [];
  //   let service = new google.maps.places.PlacesService(this.map);
  //   service.nearbySearch({
  //     location: this.latLng,
  //     radius: this.isKM,
  //     types: [this.isType]
  //   }, (results, status) => {
  //     console.log("near by result", results);
  //     console.log("near by status", status);
  //       this.callback(results, status);
  //   });


  //   // console.log("distance selected", distance);
  //   // this.radiusDistance = distance.name;

  //   // console.log("get userrequestArray" +JSON.stringify(this.userrequestArray));

  //   // for(let userreq of this.userrequestArray) {
  //   //   console.log("userreq from array", userreq);
  //   //   this.orderAdd = userreq.address;
  //   //   console.log("userreq address", this.orderAdd);

  //   //   this.nativeGeocoder.forwardGeocode(this.orderAdd)
  //   //     .then((coordinates: NativeGeocoderForwardResult[]) => {
  //   //       console.log('The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude)

  //   //       let endLatitude : any = coordinates[0].latitude;
  //   //       let endLongitude : any = coordinates[0].longitude;
          
  //   //       let p = 0.017453292519943295;    // Math.PI / 180
  //   //       let c = Math.cos;
  //   //       let a = 0.5 - c((this.currentLatitude-endLatitude) * p) / 2 + c(endLatitude * p) *c((this.currentLatitude) * p) * (1 - c(((this.currentLongitude- endLongitude) * p))) / 2;
  //   //       let dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
  //   //       console.log("distance in km", dis);
  //   //     })
  //   //     .catch((error: any) => 
  //   //       console.log(error)
  //   //     );



  //   //   // this.nativegeocoder.forwardGeocode(success, failure, this.orderAdd, { useLocale: true, maxResults: 1 });
  //   //   //   function success(coordinates) {
  //   //   //     alert("The coordinates are latitude = " + coordinates[0].latitude + " and longitude = " + coordinates[0].longitude);
  //   //   //   }
  //   //   //   function failure(err) {
  //   //   //     alert(JSON.stringify(err));
  //   //   //   }
  //   // }
  // }

  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        console.log("near by search results[i]", results[i]);
        // this.userrequestArray = results[i];

        console.log("this.userrequestArray near", this.userrequestArray);
        // this.createMarker(results[i]);
      }
    }
  }

  getCurrentLocation() {
    this.storage.get("currentLatitude").then(currentLat => {
      this.currentLatitude = currentLat;
      console.log("this.currentLatitude" +this.currentLatitude);
    });
    this.storage.get("currentLongitude").then(currentLng => {
      this.currentLongitude = currentLng;
      console.log("this.currentLongitude" +this.currentLongitude);
    });
  }

  getRequestList() {
    this.loader.show("Retrieving requests...");
    this.storage.get("userData").then(userData => {
      // console.log("userData" +JSON.stringify(userData));
      this.id = userData.data.ID;

      let reqObj = {
        "ID": this.id,
        "latitude": this.currentLatitude,
        "longitude": this.currentLongitude
      }
      
      this.serviceProvider.requestListData(reqObj).then((result) => {
        console.log("result request list" +JSON.stringify(result));
        // location.reload()
        if(result["status"] == 1){
          this.loader.hide();
          this.deliveryrequests = result["data"].deliveryRequest;
          // console.log("get request list" +JSON.stringify(this.deliveryrequests));

          this.userrequests = result["data"].userRequest;
          this.userrequestArray = this.userrequests;
          // console.log("get userrequestArray" +JSON.stringify(this.userrequestArray));

          // for(let userreq of this.userrequestArray) {
          //   console.log("userreq from array", userreq);
          //   this.orderAdd = userreq.address;
          //   console.log("userreq address", this.orderAdd);

          //   // let options: NativeGeocoderOptions = {
          //   //     useLocale: true,
          //   //     maxResults: 5
          //   // };

          //   // this.nativeGeocoder.reverseGeocode(52.5072095, 13.1452818, options)
          //   //   .then((result: NativeGeocoderReverseResult[]) => console.log(JSON.stringify(result[0])))
          //   //   .catch((error: any) => console.log(error));

          //   this.nativeGeocoder.forwardGeocode(this.orderAdd)
          //     .then((coordinates: NativeGeocoderForwardResult[]) => {
          //       console.log('The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude)

          //       let endLatitude : any = coordinates[0].latitude;
          //       let endLongitude : any = coordinates[0].longitude;
          //       // let currentLat = this.currentLatitude;
          //       // let currentLng = this.currentLongitude;

          //       // calculateDistance(this.currentLatitude,endLatitude,this.currentLongitude,endLongitude){
          //         let p = 0.017453292519943295;    // Math.PI / 180
          //         let c = Math.cos;
          //         let a = 0.5 - c((this.currentLatitude-endLatitude) * p) / 2 + c(endLatitude * p) *c((this.currentLatitude) * p) * (1 - c(((this.currentLongitude- endLongitude) * p))) / 2;
          //         let dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
          //         console.log("distance in km", dis);
          //         // return dis;
          //       // }
          //       // function getDistanceFromLatLonInKm(currentLat,currentLng,endLatitude,endLongitude) {
          //       //   var R = 6371; // Radius of the earth in km
          //       //   var dLat = deg2rad(endLatitude-currentLat);  // deg2rad below
          //       //   var dLon = deg2rad(endLongitude-currentLng); 
          //       //   var a = 
          //       //     Math.sin(dLat/2) * Math.sin(dLat/2) +
          //       //     Math.cos(deg2rad(currentLat)) * Math.cos(deg2rad(endLatitude)) * 
          //       //     Math.sin(dLon/2) * Math.sin(dLon/2)
          //       //     ; 
          //       //   var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
          //       //   var d = R * c; // Distance in km
          //       //   console.log("distance in km", d);
          //       //   return d;
          //       //  }

          //       //  function deg2rad(deg) {
          //       //   return deg * (Math.PI/180)
          //       //  }
          //     })
          //     .catch((error: any) => 
          //       console.log(error)
          //     );



          //   // this.nativegeocoder.forwardGeocode(success, failure, this.orderAdd, { useLocale: true, maxResults: 1 });
          //   //   function success(coordinates) {
          //   //     alert("The coordinates are latitude = " + coordinates[0].latitude + " and longitude = " + coordinates[0].longitude);
          //   //   }
          //   //   function failure(err) {
          //   //     alert(JSON.stringify(err));
          //   //   }
          // }

          this.openrelations = result["data"].openReationship;
          // console.log("get open relations list" +JSON.stringify(this.openrelations));

          this.closerelations = result["data"].closeReationship;
          // console.log("get close relations list" +JSON.stringify(this.closerelations));

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
    // console.log("orderId...." +orderId);

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
      // console.log("this.deliveryrequests...1" +JSON.stringify(this.deliveryrequests));
      // this.getRequestList();
    } else if(event.value == "open"){
      this.delivery = false;
      this.open = true;
      this.close = false;
      this.userrequest = false;
      // this.beforeAccept = false;
      this.afterAccept = true;
      this.storage.remove('beforeAccept');
      this.storage.set('afterAccept', this.afterAccept);
      
    
      // console.log("this.deliveryrequests...2" +JSON.stringify(this.deliveryrequests));
      // this.getRequestList();
    } else if(event.value == "close"){
      this.delivery = false;
      this.open = false;
      this.close = true;
      this.userrequest = false;
      // console.log("this.deliveryrequests...3" +JSON.stringify(this.deliveryrequests));
      // this.getRequestList();
    } else if(event.value == "userrequest"){
      this.delivery = false;
      this.open = false;
      this.close = false;
      this.userrequest = true;
      this.beforeAccept = true;
      // this.afterAccept = false;
      this.storage.remove('afterAccept');
      this.storage.set('beforeAccept', this.beforeAccept);
      // console.log("this.userrequests...4" +JSON.stringify(this.userrequests));
      // this.getRequestList();

    } else {
      this.delivery = true;
      this.open = false;
      this.close = false;
      this.userrequest = false;
      // console.log("this.deliveryrequests...5" +JSON.stringify(this.deliveryrequests));
    }
  }

  accepttoshowList(reqOrederData) {
    // this.accept = true;
    // this.storage.set('acceptStatus', this.accept);
    // console.log("accept reqOrederId....." +JSON.stringify(reqOrederData));
    this.loader.show("Please Wait");
    // this.storage.set('accept', this.accepted);
    let acceptData = {
      "ID": this.id,
      "orderid": reqOrederData.orderid,
      "orderType": "ACCEPT"
    }
    this.serviceProvider.acceptORdeclineOrderData(acceptData).then((result) => {
      // console.log("result accepted list" +JSON.stringify(result));
      if(result["status"] == 1) {
        this.loader.hide();
        let alert = this.alertCtrl.create({
          subTitle: result["message"],
          buttons: [
            {
              text: 'OK',
              handler: () => {
                console.log('ok clicked');
                // this.accept = false;
                // this.accepted = true;
                // this.getRequestList();
                // console.log("reqOrederData accepted" +JSON.stringify(reqOrederData));
                this.getRequestList();
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

  declineRequest(reqOrederData) {
    // console.log("decline reqOrederData....." +JSON.stringify(reqOrederData));
    this.loader.show("Please Wait");
    let declineData = {
      "ID": this.id,
      "orderid": reqOrederData.orderid,
      "orderType": "DECLINE"
    }
    this.serviceProvider.acceptORdeclineOrderData(declineData).then((result) => {
      // console.log("result declined list" +JSON.stringify(result));
      if(result["status"] == 1) {
        this.loader.hide();
        let alert = this.alertCtrl.create({
          subTitle: result["message"],
          buttons: [
            {
              text: 'OK',
              handler: () => {
                console.log('ok clicked');
                // this.accept = false;
                // this.accepted = true;
                // this.getRequestList();
                // console.log("reqOrederData declined" +JSON.stringify(reqOrederData));
                this.getRequestList();
              }
            }
          ]
        });
        alert.present();
      } else {
        
      }
    }, (err) => {
      console.log("err declined list" +JSON.stringify(err));
      // Error log
    });
  }

  seeListOfProducts(products) {
    // console.log("requested list products......" +JSON.stringify(products));
    // this.storage.set('confirmOrderid', products.orderid);
    this.navCtrl.push("ListproductPage", { 'productdetail': products });
  }

  viewProductList(products) {
    // console.log("view list products......" +JSON.stringify(products));
    // this.storage.set('confirmOrderid', products.orderid);
    // this.navCtrl.push("ViewproductlistPage", { 'productdetail': products.productDetails});
    this.navCtrl.push("ViewproductlistPage", { 'productdetail': products});
  }

  toMakeClose(products){
    this.loader.show("Please Wait");
    // console.log("toMakeClose......" +JSON.stringify(products));
    let confirmData = {
      "orderid": products.orderid
    }

    this.serviceProvider.completeDeliveryData(confirmData).then((result) => {
      console.log("result completeDeliveryData" +JSON.stringify(result));

      if(result["status"] == 0) {
        // this.error = result["message"];
        // console.log("this.error 0", this.error);
        this.loader.hide();
        let alert = this.alertCtrl.create({
          // title: 'Low battery',
          subTitle: result["message"],
          buttons: ['Ok']
        });
        alert.present();
      } else if(result["status"] == 1) {
        // console.log("signup status 1", result["message"]);
        this.loader.hide();
        let alert = this.alertCtrl.create({
          subTitle: result["message"],
          buttons: [
            {
              text: 'OK',
              handler: () => {
                console.log('ok clicked');
                this.getRequestList();
                // this.navCtrl.push("DeliverylistPage", {'selectedProducts' : this.selectedProducts });
              }
            }
          ]
        });
        alert.present();
      } else {

      }
    }, (err) => {
      console.log("err completeDeliveryData" +JSON.stringify(err));
      // Error log
    });
  }

  addreview(product, index){
    // console.log("add review product" +JSON.stringify(product));
    // console.log("add review index" +index);

    this.storage.set('orderid', product.orderid);
    // console.log("product.UserDetails.ID" +product.UserDetails.ID);
    this.navCtrl.push("AddreviewPage", {'reviewUserid' : product.UserDetails.ID});
  }
  gotorequestDetail(list){
    // console.log("requested list......" +JSON.stringify(list));
    // this.storage.set('productdetails', list);
    this.navCtrl.push("RequestdetailPage", { 'productdetails': list });
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    // console.log("ev.target.value" ,ev.target.value);
    let val = ev.target.value;

    if (val && val.trim() != '') {
      // console.log("userrequests" ,this.userrequests);
      this.userrequestArray = this.userrequests.filter((item) => {
        // console.log("get items item...", item);
          return ((item.UserDetails.name.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });

    } else if(val == ''){
      this.userrequestArray = this.userrequests;
    }
  }

  statusChangedfooter(event) {

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
