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
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    // tab1Root: any = 'HomeappPage';
    // tab2Root: any = 'CartlistPage';
    // tab3Root: any = 'RequestlistPage';
    // tab4Root: any = 'ProfilePage';
    // tab5Root: any = 'NotificationPage';
    // tab6Root: any = 'InquiryproductPage';
    // tab7Root: any = 'InvitefriendsPage';
    // tab8Root: any = 'ChangepasswordPage';
    // mySelectedIndex: number;
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // @ViewChild(SuperTabs) superTabs: SuperTabs;
        this.pages = [
            { pageName: 'HomeappPage', title: 'HOME', icon: 'flame', id: 'newsTab' },
            { pageName: 'CartlistPage', title: 'SHOPPING LIST', icon: 'help-circle', id: 'aboutTab' },
            { pageName: 'RequestlistPage', title: 'REQUEST', icon: 'body', id: 'accountTab' },
            { pageName: 'ProfilePage', title: 'PROFILE', icon: 'flame', id: 'newsTab' },
            { pageName: 'NotificationPage', title: 'NOTIFICATION', icon: 'help-circle', id: 'aboutTab' },
            { pageName: 'InquiryproductPage', title: 'INQUIRY PRODUCT', icon: 'body', id: 'accountTab' },
            { pageName: 'InvitefriendsPage', title: 'INVITE FRIENDS', icon: 'flame', id: 'newsTab' },
            { pageName: 'ChangepasswordPage', title: 'About', icon: 'help-circle', id: 'aboutTab' }
        ];
    }
    // slideToIndex(index: number) {
    //   this.superTabs.slideTo(index);
    // }
    // hideToolbar() {
    //   this.superTabs.showToolbar(false);
    // }
    // ngAfterViewInit() {
    //   // must wait for AfterViewInit if you want to modify the tabs instantly
    //   this.superTabsCtrl.setBadge('homeTab', 5);
    // }
    // hideToolbar() {
    //   this.superTabsCtrl.showToolbar(false);
    // }
    // showToolbar() {
    //   this.superTabsCtrl.showToolbar(true);
    // }
    TabsPage.prototype.onTabSelect = function (ev) {
        console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
    };
    TabsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabsPage');
    };
    TabsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-tabs',
            templateUrl: 'tabs.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams])
    ], TabsPage);
    return TabsPage;
}());
export { TabsPage };
//# sourceMappingURL=tabs.js.map