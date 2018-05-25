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
 * Generated class for the SupplierlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SupplierlistPage = /** @class */ (function () {
    function SupplierlistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lists = [];
        this.lists = [{ 'image': "assets/imgs/user.png", 'desc': "Nevine Acotanza" },
            { 'image': "assets/imgs/user.png", 'desc': "Oluwarotimi Adesina" },
            { 'image': "assets/imgs/user.png", 'desc': "Fabrizio Cedrone" }];
    }
    SupplierlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SupplierlistPage');
    };
    SupplierlistPage.prototype.gotoOrderProduct = function () {
        this.navCtrl.push("OrderproductPage");
    };
    SupplierlistPage.prototype.gotoHome = function () {
        // let myDiv = document.getElementById('target1');
        this.navCtrl.push("HomeappPage");
        // document.getElementById("target1").style.background = "#000000";
    };
    SupplierlistPage.prototype.gotoCart = function () {
        this.navCtrl.push("CartlistPage");
        // document.getElementById("target2").style.background = "#000000";
    };
    SupplierlistPage.prototype.gotoSupplier = function () {
        this.navCtrl.push("SupplierlistPage");
    };
    SupplierlistPage.prototype.gotoProfile = function () {
        this.navCtrl.push("ProfilePage");
        // document.getElementById("target4").style.background = "#000000";
    };
    SupplierlistPage.prototype.gotoNotification = function () {
        this.navCtrl.push("NotificationPage");
        // document.getElementById("target5").style.background = "#000000";
    };
    SupplierlistPage.prototype.gotoInquiryProduct = function () {
        this.navCtrl.push("InquiryproductPage");
        // document.getElementById("target6").style.background = "#000000";
    };
    SupplierlistPage.prototype.gotoInviteFriend = function () {
        this.navCtrl.push("InvitefriendsPage");
        // document.getElementById("target7").style.background = "#000000";
    };
    SupplierlistPage.prototype.gotoChangePassword = function () {
        this.navCtrl.push("ChangepasswordPage");
        // document.getElementById("target8").style.background = "#000000";
    };
    SupplierlistPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-supplierlist',
            templateUrl: 'supplierlist.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], SupplierlistPage);
    return SupplierlistPage;
}());
export { SupplierlistPage };
//# sourceMappingURL=supplierlist.js.map