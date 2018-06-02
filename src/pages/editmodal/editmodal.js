var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
/**
 * Generated class for the EditmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditmodalPage = /** @class */ (function () {
    function EditmodalPage(navCtrl, navParams, viewCtrl, renderer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.renderer = renderer;
        this.pickup = "E3, Detached Office Block";
        this.dropoff = "E3, Detached Office Block";
        this.price = "$512";
        this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'custom-popup', true);
    }
    EditmodalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditmodalPage');
    };
    EditmodalPage.prototype.cancel = function () {
        this.viewCtrl.dismiss();
    };
    EditmodalPage.prototype.edit = function () {
        this.navCtrl.push("RequestdetailPage");
    };
    EditmodalPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-editmodal',
            templateUrl: 'editmodal.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, ViewController, Renderer])
    ], EditmodalPage);
    return EditmodalPage;
}());
export { EditmodalPage };
//# sourceMappingURL=editmodal.js.map