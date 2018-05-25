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
import { NavController, NavParams } from 'ionic-angular';
/**
 * Generated class for the FooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var FooterComponent = /** @class */ (function () {
    function FooterComponent(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log('Hello FooterComponent Component');
        this.text = 'Hello World';
    }
    FooterComponent.prototype.gotoHome = function () {
        // let myDiv = document.getElementById('target1');
        this.navCtrl.push("HomeappPage");
        // document.getElementById("target1").style.background = "#000000";
    };
    FooterComponent.prototype.gotoCart = function () {
        this.navCtrl.push("CartlistPage");
        // document.getElementById("target2").style.background = "#000000";
    };
    FooterComponent.prototype.gotoRequest = function () {
        this.navCtrl.push("RequestlistPage");
        // document.getElementById("target3").style.background = "#000000";
    };
    FooterComponent.prototype.gotoProfile = function () {
        this.navCtrl.push("ProfilePage");
        // document.getElementById("target4").style.background = "#000000";
    };
    FooterComponent.prototype.gotoNotification = function () {
        this.navCtrl.push("NotificationPage");
        // document.getElementById("target5").style.background = "#000000";
    };
    FooterComponent.prototype.gotoInquiryProduct = function () {
        this.navCtrl.push("InquiryproductPage");
        // document.getElementById("target6").style.background = "#000000";
    };
    FooterComponent.prototype.gotoInviteFriend = function () {
        this.navCtrl.push("InvitefriendsPage");
        // document.getElementById("target7").style.background = "#000000";
    };
    FooterComponent.prototype.gotoChangePassword = function () {
        this.navCtrl.push("ChangepasswordPage");
        // document.getElementById("target8").style.background = "#000000";
    };
    FooterComponent = __decorate([
        Component({
            selector: 'footer',
            templateUrl: 'footer.html'
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], FooterComponent);
    return FooterComponent;
}());
export { FooterComponent };
//# sourceMappingURL=footer.js.map