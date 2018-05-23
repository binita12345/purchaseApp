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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.customer = false;
        this.supplier = true;
        this.signUpFrom = formBuilder.group({
            name: [''],
            email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
            password: ['', Validators.compose([Validators.required])],
            mobile: [''],
            gender: [''],
            customer: [''],
            supplier: [''],
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.mcqAnswer = function (value) {
        console.log("value", value);
        this.radioValue = value;
        console.log("this.radioValue", this.radioValue);
    };
    SignupPage.prototype.userAccount = function () {
        console.log("created user account");
        var formObj = {
            'name': this.signUpFrom.value.name,
            'email': this.signUpFrom.value.email,
            'password': this.signUpFrom.value.password,
            'mobile': this.signUpFrom.value.mobile,
            'gender': this.radioValue,
            'customer': this.signUpFrom.value.customer,
            'supplier': this.signUpFrom.value.supplier
        };
        console.log(formObj);
        this.navCtrl.push("HomeappPage");
    };
    SignupPage.prototype.gotoSignIn = function () {
        this.navCtrl.push("SigninPage");
    };
    SignupPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-signup',
            templateUrl: 'signup.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, FormBuilder])
    ], SignupPage);
    return SignupPage;
}());
export { SignupPage };
//# sourceMappingURL=signup.js.map