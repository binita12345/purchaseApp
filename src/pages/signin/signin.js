var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, navParams, formBuilder, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.storage = storage;
        // remember :  any;
        this.error = '';
        this.signInFrom = formBuilder.group({
            email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
            password: ['', Validators.compose([Validators.minLength(4), Validators.required])],
        });
        this.signInFrom.controls.email.setValue('supplier@gmail.com');
        this.signInFrom.controls.password.setValue('123456');
    }
    SigninPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SigninPage');
    };
    SigninPage.prototype.gotoforgotPassword = function () {
        this.navCtrl.push("ForgotpasswordPage");
    };
    SigninPage.prototype.onSignup = function () {
        console.log("go to sign up page");
        this.navCtrl.push("SignupPage");
    };
    SigninPage.prototype.appLogin = function () {
        console.log("sign in email", this.signInFrom.value.email);
        console.log("sign in password", this.signInFrom.value.password);
        if (this.signInFrom.value.email == "user@gmail.com" && this.signInFrom.value.password == "123456") {
            this.storage.set('isUserLogin', true);
            this.storage.remove('isSupplierLogin');
            // console.log(this.storage.get('isUserLogin'));
            console.log("go to home page by user");
            this.navCtrl.push("HomeappPage");
        }
        else if (this.signInFrom.value.email == "supplier@gmail.com" && this.signInFrom.value.password == "123456") {
            this.storage.remove('isUserLogin');
            this.storage.set('isSupplierLogin', true);
            // console.log(this.storage.get('isSupplierLogin'));
            console.log("go to home page by supplier");
            this.navCtrl.push("HomeappPage");
        }
        // this.navCtrl.setRoot('TabsPage');
    };
    SigninPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-signin',
            templateUrl: 'signin.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, FormBuilder, Storage])
    ], SigninPage);
    return SigninPage;
}());
export { SigninPage };
//# sourceMappingURL=signin.js.map