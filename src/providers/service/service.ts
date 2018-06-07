import { HttpClient } from '@angular/common/http';
import {Http, Headers} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { catchError } from 'rxjs/operators';
import { Events } from 'ionic-angular';
import { map } from 'rxjs/operators/map';
import { Storage } from "@ionic/storage";
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

let apiUrl = 'http://192.168.0.127:8080/purchasing/apis/usermodule/';

@Injectable()
export class ServiceProvider {

	headers = new Headers({ "Content-Type": "application/json" });

  constructor(public http : Http, private storage: Storage) {
    console.log('Hello ServiceProvider Provider');
    storage.get("token").then(token => {
      if (token) {
        this.headers.append("Authorization", token);
      }
    });
  }
  error(err) {
    let json = JSON.parse(err._body);
    if (json.error.message == 1) {
      console.log("please Re Login ...!!!");
    }
  }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  // This api is used for sign up in application.
  signupData(credentials) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'userSignUp', JSON.stringify(credentials), {headers: headers})
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

      this.http.post(apiUrl + 'userSignIn', JSON.stringify(credentials), {headers: headers})
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

      this.http.post(apiUrl + 'socialSignIn', JSON.stringify(credentials), {headers: headers})
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

      this.http.post(apiUrl + 'forgotPassword', JSON.stringify(credential), {headers: headers})
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

      this.http.post(apiUrl + 'userUpdate', JSON.stringify(credential), {headers: headers})
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

      this.http.post(apiUrl + 'productAdd', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          console.log("add product data", res.json());
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  // This api is used to get products list of user in application
  getProductList(data) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();

      this.http.post(apiUrl + 'productList', JSON.stringify(data), {headers: headers})
        .subscribe(res => {
          console.log("add product data", res.json());
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

}
