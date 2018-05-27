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
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/**
 * Generated class for the AddreviewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddreviewPage = /** @class */ (function () {
    // public addReviewFrom:FormGroup;
    function AddreviewPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // this.addReviewFrom = formBuilder.group({
        //    username: [''],
        //    productname: [''],
        //    comments: ['']
        //  });
    }
    AddreviewPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AddreviewPage');
    };
    AddreviewPage.prototype.submit = function () {
        this.navCtrl.pop();
    };
    AddreviewPage.prototype.onModelChange = function (event) {
        console.log("event star", event.value);
    };
    AddreviewPage.prototype.gotoHome = function () {
        // let myDiv = document.getElementById('target1');
        this.navCtrl.push("HomeappPage");
        // document.getElementById("target1").style.background = "#000000";
    };
    AddreviewPage.prototype.gotoCart = function () {
        this.navCtrl.push("CartlistPage");
        // document.getElementById("target2").style.background = "#000000";
    };
    AddreviewPage.prototype.gotoRequest = function () {
        this.navCtrl.push("RequestlistPage");
        // document.getElementById("target3").style.background = "#000000";
    };
    AddreviewPage.prototype.gotoProfile = function () {
        this.navCtrl.push("ProfilePage");
        // document.getElementById("target4").style.background = "#000000";
    };
    AddreviewPage.prototype.gotoNotification = function () {
        this.navCtrl.push("NotificationPage");
        // document.getElementById("target5").style.background = "#000000";
    };
    AddreviewPage.prototype.gotoInquiryProduct = function () {
        this.navCtrl.push("InquiryproductdetailPage");
        // document.getElementById("target6").style.background = "#000000";
    };
    AddreviewPage.prototype.gotoInviteFriend = function () {
        this.navCtrl.push("InvitefriendsPage");
        // document.getElementById("target7").style.background = "#000000";
    };
    AddreviewPage.prototype.gotoChangePassword = function () {
        this.navCtrl.push("ChangepasswordPage");
        // document.getElementById("target8").style.background = "#000000";
    };
    AddreviewPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-addreview',
            templateUrl: 'addreview.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], AddreviewPage);
    return AddreviewPage;
}());
export { AddreviewPage };
//# sourceMappingURL=addreview.js.map