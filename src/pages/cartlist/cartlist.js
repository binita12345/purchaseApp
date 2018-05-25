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
 * Generated class for the CartlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartlistPage = /** @class */ (function () {
    function CartlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lists = [];
        this.lists = [{ 'image': "assets/imgs/bgcolor.png", 'name': "Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00" },
            { 'image': "assets/imgs/bgcolor.png", 'name': "Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00" },
            { 'image': "assets/imgs/bgcolor.png", 'name': "Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00" },
            { 'image': "assets/imgs/bgcolor.png", 'name': "Product Name", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'distance': "assets/imgs/map.png", 'price': "$54.00" }];
    }
    CartlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartlistPage');
    };
    CartlistPage.prototype.gotoHome = function () {
        // let myDiv = document.getElementById('target1');
        this.navCtrl.push("HomeappPage");
        // document.getElementById("target1").style.background = "#000000";
    };
    CartlistPage.prototype.gotoCart = function () {
        this.navCtrl.push("CartlistPage");
        // document.getElementById("target2").style.background = "#000000";
    };
    CartlistPage.prototype.gotoRequest = function () {
        this.navCtrl.push("RequestlistPage");
        // document.getElementById("target3").style.background = "#000000";
    };
    CartlistPage.prototype.gotoProfile = function () {
        this.navCtrl.push("ProfilePage");
        // document.getElementById("target4").style.background = "#000000";
    };
    CartlistPage.prototype.gotoNotification = function () {
        this.navCtrl.push("NotificationPage");
        // document.getElementById("target5").style.background = "#000000";
    };
    CartlistPage.prototype.gotoInquiryProduct = function () {
        this.navCtrl.push("InquiryproductPage");
        // document.getElementById("target6").style.background = "#000000";
    };
    CartlistPage.prototype.gotoInviteFriend = function () {
        this.navCtrl.push("InvitefriendsPage");
        // document.getElementById("target7").style.background = "#000000";
    };
    CartlistPage.prototype.gotoChangePassword = function () {
        this.navCtrl.push("ChangepasswordPage");
        // document.getElementById("target8").style.background = "#000000";
    };
    CartlistPage.prototype.inviteSupplier = function () {
        this.navCtrl.push("SupplierlistPage");
    };
    CartlistPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-cartlist',
            templateUrl: 'cartlist.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], CartlistPage);
    return CartlistPage;
}());
export { CartlistPage };
//# sourceMappingURL=cartlist.js.map