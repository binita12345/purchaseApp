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
/**
 * Generated class for the ProductdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductdetailPage = /** @class */ (function () {
    function ProductdetailPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.name = "xyz products";
        this.description = "There are many variations of passages of Lorem ipsum available, but the majority have suffered alteration in some form, by injected humour";
        this.pickup = "Maidenhead, SL6 1QZ, United Kingdom";
        this.dropoff = "Maidenhead, SL6 1QZ, United Kingdom";
        this.time = "12:12";
        this.amount = "$5212";
    }
    ProductdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductdetailPage');
    };
    ProductdetailPage.prototype.gotoHome = function () {
        this.navCtrl.push("HomeappPage");
    };
    ProductdetailPage.prototype.gotoCart = function () {
        this.navCtrl.push("CartlistPage");
    };
    ProductdetailPage.prototype.gotoRequest = function () {
        this.navCtrl.push("RequestlistPage");
    };
    ProductdetailPage.prototype.gotoProfile = function () {
        this.navCtrl.push("ProfilePage");
    };
    ProductdetailPage.prototype.gotoNotification = function () {
        this.navCtrl.push("NotificationPage");
    };
    ProductdetailPage.prototype.gotoInquiryProduct = function () {
        this.navCtrl.push("InquiryproductdetailPage");
    };
    ProductdetailPage.prototype.gotoInviteFriend = function () {
        this.navCtrl.push("InvitefriendsPage");
    };
    ProductdetailPage.prototype.gotoChangePassword = function () {
        this.navCtrl.push("ChangepasswordPage");
    };
    ProductdetailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-productdetail',
            templateUrl: 'productdetail.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], ProductdetailPage);
    return ProductdetailPage;
}());
export { ProductdetailPage };
//# sourceMappingURL=productdetail.js.map