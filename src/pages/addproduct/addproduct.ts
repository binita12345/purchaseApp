import { Component, ViewChild, NgZone, ElementRef, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController, AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
import { } from 'googlemaps';
import {FormControl} from "@angular/forms";
import { MapsAPILoader } from '@agm/core';
/**
 * Generated class for the AddproductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addproduct',
  templateUrl: 'addproduct.html',
})
export class AddproductPage {

  productData = { name:'', description: '', address: '', time: '', amount: '' };
  id : any;
  base64Image = 'assets/imgs/photo-camera.png';
  // image : 'assets/imgs/photo-camera.png';
  image : any;
  error : any = '';
  public searchControl: FormControl;
  public latitude: number;
  public longitude: number;
  public zoom: number;

  @ViewChild("search")
  public searchElementRef;

  currentLatitude : any;
  currentLongitude : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private camera: Camera, 
    public platform: Platform, public actionSheetCtrl: ActionSheetController, public serviceProvider: ServiceProvider,
    private alertCtrl: AlertController, private loader: Loader, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {

    this.storage.get("userData").then(userData => {
      // console.log("userData" +JSON.stringify(userData));
      this.id = userData.data.ID;
    });

    this.searchControl = new FormControl();
    this.getCurrentLocation();
    this.setCurrentPosition();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddproductPage');

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
          this.productData.address = place.formatted_address;
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

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  // var input = document.getElementById('pac-input');
  
  choosePhoto() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Option',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Take photo',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'ios-camera-outline' : null,
          handler: () => {
            this.takephoto();
          }
        },
        {
          text: 'Choose photo from Gallery',
          icon: !this.platform.is('ios') ? 'ios-images-outline' : null,
          handler: () => {
            this.openGallery();
          }
        },
      ]
    });
    actionSheet.present();
  }

  takephoto() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      // console.log("take photo imagedata" +JSON.stringify(imageData));
      this.image = imageData;
      // console.log("take photo image" +this.image);
      this.base64Image  = 'data:image/jpeg;base64,' + imageData;
      // console.log("take photo base64Image" +this.base64Image);
      // this.photos.push(this.base64Image);
      // this.photos.reverse();
    }, (err) => {
      // Handle error
    })
  }
 
  openGallery() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM
    }
 
    this.camera.getPicture(options).then((imageData) => {
      console.log("get image from gallary");
       // imageData is either a base64 encoded string or a file URI
       // If it's base64:
      // console.log("gallary imagedata" +JSON.stringify(imageData));
      this.image = imageData;
      // console.log("gallary image" +this.image);
      this.base64Image  = 'data:image/jpeg;base64,'+imageData;
      // console.log("gallary base64Image" +this.base64Image);
    }, (err) => {
       // Handle error
       console.log("gallary err" +JSON.stringify(err));
    })
  }



  addtoCartList(){
    this.error = '';
    this.loader.show("Please Wait");
    console.log("add product of user");

    let productsObj = {
      'ID': this.id,
      'name': this.productData.name,
      'description': this.productData.description,
      'address': this.productData.address,
      "latitude": this.currentLatitude,
      "longitude": this.currentLongitude,
      'deliveryTime': this.productData.time,
      'amount': this.productData.amount,
      'productImage': this.image,
    }

    // console.log("productsObj" +JSON.stringify(productsObj));
    this.serviceProvider.addProductData(productsObj).then((result) => {
      console.log("result add product" +JSON.stringify(result));
      if(result["status"] == 2) {
        this.loader.hide();
        this.error = result["message"];

      } else if(result["status"] == 1) {
        this.loader.hide();
        let alert = this.alertCtrl.create({
          subTitle: result["message"],
          buttons: [
            {
              text: 'OK',
              handler: () => {
                console.log('ok clicked');
                // console.log("this.id", this.id);
                this.navCtrl.push("CartlistPage", {'id': this.id});
              }
            }
          ]
        });
        alert.present();
      }
    }, (err) => {
      console.log("err add product" +JSON.stringify(err));
      // Error log
    });
  }

}
