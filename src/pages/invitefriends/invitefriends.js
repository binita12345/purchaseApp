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
 * Generated class for the InvitefriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InvitefriendsPage = /** @class */ (function () {
    function InvitefriendsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lists = [];
        this.check = false;
        this.lists = [{ 'name': "UIDAI", 'num': "+91 98297 99298" },
            { 'name': "Distress Number", 'num': "112" },
            { 'name': "Jeks parser", 'num': "+91 98297 99298" },
            { 'name': "Jeks parser", 'num': "+91 98297 99298" },
            { 'name': "Catch a Song", 'num': "+9157373" }];
    }
    InvitefriendsPage.prototype.checkList = function (list) {
        console.log("list", list);
        if (list) {
            this.check = true;
        }
        else {
            this.check = false;
        }
    };
    InvitefriendsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InvitefriendsPage');
    };
    InvitefriendsPage.prototype.gotoHome = function () {
        this.navCtrl.push("HomeappPage");
    };
    InvitefriendsPage.prototype.gotoCart = function () {
        this.navCtrl.push("CartlistPage");
    };
    InvitefriendsPage.prototype.gotoRequest = function () {
        this.navCtrl.push("RequestlistPage");
    };
    InvitefriendsPage.prototype.gotoProfile = function () {
        this.navCtrl.push("ProfilePage");
    };
    InvitefriendsPage.prototype.gotoNotification = function () {
        this.navCtrl.push("NotificationPage");
    };
    InvitefriendsPage.prototype.gotoInquiryProduct = function () {
        this.navCtrl.push("InquiryproductdetailPage");
    };
    InvitefriendsPage.prototype.gotoInviteFriend = function () {
        this.navCtrl.push("InvitefriendsPage");
    };
    InvitefriendsPage.prototype.gotoChangePassword = function () {
        this.navCtrl.push("ChangepasswordPage");
    };
    InvitefriendsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-invitefriends',
            templateUrl: 'invitefriends.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], InvitefriendsPage);
    return InvitefriendsPage;
}());
export { InvitefriendsPage };
//# sourceMappingURL=invitefriends.js.map