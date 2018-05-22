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
/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        // remember :  any;
        this.error = '';
        this.signInFrom = formBuilder.group({
            email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
            password: ['', Validators.compose([Validators.minLength(4), Validators.required])],
        });
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
    SigninPage.prototype.userLogin = function () {
        console.log("go to home page");
        // this.navCtrl.push("HomeappPage");
        this.navCtrl.setRoot('TabsPage');
    };
    SigninPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-signin',
            templateUrl: 'signin.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, FormBuilder])
    ], SigninPage);
    return SigninPage;
}());
export { SigninPage };
//# sourceMappingURL=signin.js.map