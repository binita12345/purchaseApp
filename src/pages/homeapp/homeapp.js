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
 * Generated class for the HomeappPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomeappPage = /** @class */ (function () {
    function HomeappPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    HomeappPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomeappPage');
    };
    HomeappPage.prototype.addProduct = function () {
        this.navCtrl.push("AddproductPage");
    };
    HomeappPage.prototype.gotoHome = function () {
        this.navCtrl.push("HomeappPage");
    };
    HomeappPage.prototype.gotoCart = function () {
        this.navCtrl.push("CartlistPage");
    };
    HomeappPage.prototype.gotoRequest = function () {
        this.navCtrl.push("RequestlistPage");
    };
    HomeappPage.prototype.gotoProfile = function () {
        this.navCtrl.push("ProfilePage");
    };
    HomeappPage.prototype.gotoNotification = function () {
        this.navCtrl.push("NotificationPage");
    };
    HomeappPage.prototype.gotoInquiryProduct = function () {
        this.navCtrl.push("InquiryproductdetailPage");
    };
    HomeappPage.prototype.gotoInviteFriend = function () {
        this.navCtrl.push("InvitefriendsPage");
    };
    HomeappPage.prototype.gotoChangePassword = function () {
        this.navCtrl.push("ChangepasswordPage");
    };
    HomeappPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-homeapp',
            templateUrl: 'homeapp.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], HomeappPage);
    return HomeappPage;
}());
export { HomeappPage };
//# sourceMappingURL=homeapp.js.map