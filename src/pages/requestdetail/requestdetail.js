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
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the RequestdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestdetailPage = /** @class */ (function () {
    function RequestdetailPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.lists = [];
        this.lists = [{ 'image': "assets/imgs/bgcolor.png", 'name': "PRODUCT NAME", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00" },
            { 'image': "assets/imgs/bgcolor.png", 'name': "PRODUCT NAME", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00" },
            { 'image': "assets/imgs/bgcolor.png", 'name': "PRODUCT NAME", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00" },
            { 'image': "assets/imgs/bgcolor.png", 'name': "PRODUCT NAME", 'map': "assets/imgs/placeholder.png", 'parag': "12-22 Rothschild Avenue", 'price': "$54.00" }];
    }
    RequestdetailPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestdetailPage');
    };
    RequestdetailPage.prototype.editProduct = function () {
        var alert = this.alertCtrl.create({
            title: 'Product Name',
            inputs: [
                {
                    // title: 'Pick up location',
                    name: 'username',
                    placeholder: 'Username'
                },
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Edit',
                    handler: function (data) {
                        // if (User.isValid(data.username, data.password)) {
                        //   // logged in!
                        // } else {
                        //   // invalid login
                        //   return false;
                        // }
                    }
                }
            ]
        });
        alert.present();
    };
    RequestdetailPage.prototype.gotoproductDetail = function () {
        this.navCtrl.push("ProductdetailPage");
    };
    RequestdetailPage.prototype.gotoHome = function () {
        this.navCtrl.push("HomeappPage");
    };
    RequestdetailPage.prototype.gotoCart = function () {
        this.navCtrl.push("CartlistPage");
    };
    RequestdetailPage.prototype.gotoRequest = function () {
        this.navCtrl.push("RequestlistPage");
    };
    RequestdetailPage.prototype.gotoProfile = function () {
        this.navCtrl.push("ProfilePage");
    };
    RequestdetailPage.prototype.gotoNotification = function () {
        this.navCtrl.push("NotificationPage");
    };
    RequestdetailPage.prototype.gotoInquiryProduct = function () {
        this.navCtrl.push("InquiryproductdetailPage");
    };
    RequestdetailPage.prototype.gotoInviteFriend = function () {
        this.navCtrl.push("InvitefriendsPage");
    };
    RequestdetailPage.prototype.gotoChangePassword = function () {
        this.navCtrl.push("ChangepasswordPage");
    };
    RequestdetailPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-requestdetail',
            templateUrl: 'requestdetail.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AlertController])
    ], RequestdetailPage);
    return RequestdetailPage;
}());
export { RequestdetailPage };
//# sourceMappingURL=requestdetail.js.map