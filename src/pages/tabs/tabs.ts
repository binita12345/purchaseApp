import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

	// @ViewChild(SuperTabs) superTabs: SuperTabs;

	pages = [
	    { pageName: 'HomeappPage', title: 'HOME', icon: 'flame', id: 'homeTab'},
	    { pageName: 'CartlistPage', title: 'SHOPPING LIST', icon: 'help-circle', id: 'shoppingTab'},
	    { pageName: 'RequestlistPage', title: 'REQUEST', icon: 'body', id: 'requestTab'},
	    { pageName: 'ProfilePage', title: 'PROFILE', icon: 'flame', id: 'profileTab'},
	    { pageName: 'NotificationPage', title: 'NOTIFICATION', icon: 'help-circle', id: 'notificationTab'},
	    { pageName: 'InquiryproductPage', title: 'INQUIRY PRODUCT', icon: 'body', id: 'inquiryTab'},
	    { pageName: 'InvitefriendsPage', title: 'INVITE FRIENDS', icon: 'flame', id: 'inviteTab'},
	    { pageName: 'ChangepasswordPage', title: 'CHANGE PASSWORD', icon: 'help-circle', id: 'changepasswordTab'}
	  ];

	// selectedTab = 0;

	@ViewChild(SuperTabs) superTabs: SuperTabs;
	// tab1Root: any = 'HomeappPage';
	// tab2Root: any = 'CartlistPage';
	// tab3Root: any = 'RequestlistPage';
	// tab4Root: any = 'ProfilePage';
	// tab5Root: any = 'NotificationPage';
	// tab6Root: any = 'InquiryproductPage';
	// tab7Root: any = 'InvitefriendsPage';
	// tab8Root: any = 'ChangepasswordPage';
	// mySelectedIndex: number;

	loaded:   boolean = false;
	tabIndex: number  = 0;


  	constructor(public navCtrl: NavController, public navParams: NavParams, private nativePageTransitions: NativePageTransitions) {
  	
	}
	slideToIndex(index: number) {
	    this.superTabs.slideTo(index);
	  }
	onTabSelect(ev: any) {
	    console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
	}

	private getAnimationDirection(index):string {
	  var currentIndex = this.tabIndex;

	  this.tabIndex = index;

	  switch (true){
	    case (currentIndex < index):
	      return('left');
	    case (currentIndex > index):
	      return ('right');
	  }
	}

	public transition(e):void {
	  let options: NativeTransitionOptions = {
	   direction:this.getAnimationDirection(e.index),
	   duration: 250,
	   slowdownfactor: -1,
	   slidePixels: 0,
	   iosdelay: 20,
	   androiddelay: 0,
	   fixedPixelsTop: 0,
	   fixedPixelsBottom: 48
	  };

	  if (!this.loaded) {
	    this.loaded = true;
	    return;
	  }

	  this.nativePageTransitions.slide(options);
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
	  
	  // onTabSelect(ev: any) {
	  //   console.log('Tab selected', 'Index: ' + ev.index, 'Unique ID: ' + ev.id);
	  // }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
