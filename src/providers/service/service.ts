import { HttpClient } from '@angular/common/http';
import {Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { catchError } from 'rxjs/operators';
import { Events, AlertController } from 'ionic-angular';
import { map } from 'rxjs/operators/map';
import { Storage } from "@ionic/storage";
import * as PouchDB from 'pouchdb';  
// import cordovaSqlitePlugin from 'pouchdb-adapter-cordova-sqlite';
import { Network } from '@ionic-native/network';
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let apiUrl = 'http://ec2-13-59-134-99.us-east-2.compute.amazonaws.com/purchasing/apis/';

export enum ConnectionStatus {
  Online,
  Offline
}

@Injectable()
export class ServiceProvider {

  public pdb; 
  public products;
  public previousStatus
  isOnline : any;

  private _DB     : any;
  private success : boolean = true;

	headers = new Headers({ "Content-Type": "application/json" });

  constructor(public http : Http, private storage: Storage, public network: Network, public events: Events, public alertCtrl: AlertController) {
    console.log('Hello ServiceProvider Provider');

    // this.initialiseDB();

    this.previousStatus = ConnectionStatus.Online;

    storage.get("token").then(token => {
      if (token) {
        this.headers.append('Access-Control-Allow-Origin' , '*');
        this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        this.headers.append('Accept','application/json');
        this.headers.append('content-type','application/json');
        this.headers.append("Authorization", token);
      }
    });
  }

  // initialiseDB()
  // {
  //     this._DB = new PouchDB('purchasingApp');
  // }

   /* BOOTS a listener on the network */
  public initializeNetworkEvents(): void {

    /* OFFLINE */
    this.network.onDisconnect().subscribe(() => {

      if(this.previousStatus === ConnectionStatus.Online) { 
        this.events.publish('network:offline') 
        this.previousStatus = ConnectionStatus.Offline
        console.log("Offline this.previousStatus", this.previousStatus);
        // if(this.previousStatus == 1) {
        //   this.isOnline = false;
        //   this.storage.set('isConnected', this.isOnline);
        // }
      }
    })

    /* ONLINE */
    this.network.onConnect().subscribe(() => {

      console.log('network connected!');

      if(this.previousStatus === ConnectionStatus.Offline) { 
        this.events.publish('network:online') 
        this.previousStatus = ConnectionStatus.Online
        console.log("Online this.previousStatus", this.previousStatus);
        // if(this.previousStatus == 0) {
        //   this.isOnline = true;
        //   this.storage.set('isConnected', this.isOnline);
        // }
      }

      // We just got a connection but we need to wait briefly
      // before we determine the connection type. Might need to wait.
      // prior to doing any api requests as well.
      setTimeout(() => {
        if (this.network.type === 'wifi') {
          console.log('we got a wifi connection, woohoo!');
        }
      }, 3000);
    })

  }

  public getNetworkType(): string {
    return this.network.type
  }

  error(err) {
    let json = JSON.parse(err._body);
    if (json.error.message == 1) {
      console.log("please Re Login ...!!!");
    }
  }

  // createPouchDB() {
  //   PouchDB.plugin(cordovaSqlitePlugin);
  //   this.pdb = new PouchDB('products.db', 
  //   { adapter: 'cordova-sqlite' });
  // }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  // This api is used for sign up in application.
  signupData(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'UserModule/userSignUp', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
        	// console.log("res signup", res.json());
      		resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used for signIn in application.
  signinData(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'UserModule/userSignIn', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
        	// console.log("res signin", res.json());
      		resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used to login by social signIn in application.
  socialSignIn(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'UserModule/socialSignIn', JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
        	// console.log("res signin", res.json());
      		resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used for user which forgot his/her password.
  forgotPasswordData(credential) {
  	return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'UserModule/forgotPassword', JSON.stringify(credential), {headers: headers})
        .subscribe(res => {
        	// console.log("res forgot password", res.json());
      		resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used for user which will update his/her profile.
  profileUpdateData(credential) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'UserModule/userUpdate', JSON.stringify(credential), {headers: headers})
        .subscribe(res => {
          // console.log("res forgot password", res.json());
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used to add products in application
  addProductData(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'ProductModule/productAdd', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          console.log("add product data", res.json());
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used to get products list of user in application
  getProductList(ID) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'ProductModule/productList', JSON.stringify(ID), {headers: headers})
        .subscribe(res => {
          console.log("get product list", res.json());
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used to edit particular products list
  editProductData(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'ProductModule/productEdit', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          console.log("edit products list" +JSON.stringify(res.json()));
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used to get products list of user in application
  getSupplierList(ID) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'UserModule/supplierList', JSON.stringify(ID), {headers: headers})
        .subscribe(res => {
          console.log("get supplier list" +JSON.stringify(res.json()));
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used to change the password of application
  changePasswordService(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'UserModule/changePassword', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          console.log("change password", res.json());
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used to create the order
  orderPlace(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'OrderModule/orderCreate', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          console.log("create order", res.json());
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used to deliver request, open relationship and close relationship
  requestListData(ID) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'OrderModule/requestList', JSON.stringify(ID), {headers: headers})
        .subscribe(res => {
          // console.log("get request list", res.json());
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used to delete order
  deleteOrderData(Id) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'OrderModule/orderDelete', JSON.stringify(Id), {headers: headers})
        .subscribe(res => {
          console.log("delete order service", res.json());
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used to accept order request
  acceptORdeclineOrderData(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'OrderModule/orderRequest', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          console.log("accept order service", res.json());
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used to complete the user order request
  completeDeliveryData(Id) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'OrderModule/orderConfrom', JSON.stringify(Id), {headers: headers})
        .subscribe(res => {
          console.log("confirm order service", res.json());
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used to give review to supplier or user
  addReviewData(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'ReviewModule/reviewAdd', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          console.log("add review service" +res.json());
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used to get user's review list
  ReviewListData(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'ReviewModule/reviewList', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          console.log("add review service" +res.json());
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used to delete the products which is of any order request
  deleteProduct(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'OrderModule/orderProductDelete', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          console.log("delete order product" +res.json());
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used to do inquiries for products which are available or not in other stores.
  inquiryAddProducts(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'InquiryModule/inquiryAdd', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          console.log("add product inquiry" +res.json());
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used to do inquiries for products which are available or not in other stores.
  inquiryProductsList(Id) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'InquiryModule/inquiryList', JSON.stringify(Id), {headers: headers})
        .subscribe(res => {
          // console.log("inquiries list" +JSON.stringify(res.json()));
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
}
