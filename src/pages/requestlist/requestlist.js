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
 * Generated class for the RequestlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestlistPage = /** @class */ (function () {
    function RequestlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lists = [];
        this.delivery = true;
        this.open = false;
        this.close = false;
        this.lists = [{ 'image': "assets/imgs/bgcolor.png", 'name': "User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12" },
            { 'image': "assets/imgs/bgcolor.png", 'name': "User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12" },
            { 'image': "assets/imgs/bgcolor.png", 'name': "User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12" },
            { 'image': "assets/imgs/bgcolor.png", 'name': "User Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00", 'count': "12" }];
        this.requests = "delivery";
    }
    RequestlistPage.prototype.statusChanged = function (event) {
        console.log("event", event.value);
        if (event.value == "delivery") {
            this.delivery = true;
            this.open = false;
            this.close = false;
            console.log("this.lists...1", this.lists);
        }
        else if (event.value == "open") {
            this.delivery = false;
            this.open = true;
            this.close = false;
            console.log("this.lists...2", this.lists);
        }
        else if (event.value == "close") {
            this.delivery = false;
            this.open = false;
            this.close = true;
            console.log("this.lists...3", this.lists);
        }
        else {
            this.delivery = true;
            this.open = false;
            this.close = false;
            console.log("this.lists...4", this.lists);
        }
    };
    RequestlistPage.prototype.addreview = function () {
        this.navCtrl.push("AddreviewPage");
    };
    RequestlistPage.prototype.gotorequestDetail = function () {
        this.navCtrl.push("RequestdetailPage");
    };
    RequestlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestlistPage');
    };
    RequestlistPage.prototype.gotoHome = function () {
        this.navCtrl.push("HomeappPage");
    };
    RequestlistPage.prototype.gotoCart = function () {
        this.navCtrl.push("CartlistPage");
    };
    RequestlistPage.prototype.gotoRequest = function () {
        this.navCtrl.push("RequestlistPage");
    };
    RequestlistPage.prototype.gotoProfile = function () {
        this.navCtrl.push("ProfilePage");
    };
    RequestlistPage.prototype.gotoNotification = function () {
        this.navCtrl.push("NotificationPage");
    };
    RequestlistPage.prototype.gotoInquiryProduct = function () {
        this.navCtrl.push("InquiryproductdetailPage");
    };
    RequestlistPage.prototype.gotoInviteFriend = function () {
        this.navCtrl.push("InvitefriendsPage");
    };
    RequestlistPage.prototype.gotoChangePassword = function () {
        this.navCtrl.push("ChangepasswordPage");
    };
    RequestlistPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-requestlist',
            templateUrl: 'requestlist.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], RequestlistPage);
    return RequestlistPage;
}());
export { RequestlistPage };
//# sourceMappingURL=requestlist.js.map