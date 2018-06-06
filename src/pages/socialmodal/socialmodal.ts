import { Component, Renderer } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { Storage } from '@ionic/storage';
import { Loader } from "../../providers/loader/loader";
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the SocialmodalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-socialmodal',
  templateUrl: 'socialmodal.html',
})
export class SocialmodalPage {

	radioValue: any;
	userValue: any;
	googleLoginData: any;
	facebookLoginData: any;
	error : any = '';
	logintype:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public renderer: Renderer,
  	public serviceProvider: ServiceProvider, public storage: Storage, private loader: Loader, private alertCtrl: AlertController) {

		this.renderer.setElementClass(viewCtrl.pageRef().nativeElement, 'my-popup', true);
		this.googleLoginData = navParams.get('googledata');
		console.log("googleLoginData" +JSON.stringify(this.googleLoginData));
		this.facebookLoginData = navParams.get('facebookdata');
		console.log("facebookLoginData" +JSON.stringify(this.facebookLoginData));
		// this.storage.get('loginType')
		this.storage.get("loginType").then(getLoginType => { 
			console.log("getLoginType" +getLoginType);
			this.logintype = getLoginType;
		});
  }

  ionViewDidLoad() {
		console.log('ionViewDidLoad SocialmodalPage');
  }

  mcqAnswer(value)
  {
	 console.log("value" +value);
	 this.radioValue = value;
	 console.log("this.radioValue" +this.radioValue);
  }
  userAnswer(value1)
  {
	 console.log("value..1" +value1);
	 this.userValue = value1;
	 console.log("this.userValue" +this.userValue);
  }
  cancel(){
		this.viewCtrl.dismiss();
  }
  save(){
  	this.error = '';
  	console.log("this.radioValue......." +this.radioValue);
  	console.log("this.userValue........" +this.userValue);
  	console.log("this.logintype........" +this.logintype);

		// this.navCtrl.push("SigninPage", {'gender' :this.radioValue, 'user_type': this.userValue});
		if(this.logintype == "GOOGLE") {
			console.log("googleLoginData......" +JSON.stringify(this.googleLoginData));
			let googlePlusData = {
	      "identifierId":this.googleLoginData.identifierId,
	      "name":this.googleLoginData.name,
	      "email":this.googleLoginData.email,
	      "deviceType":this.googleLoginData.deviceType,
	      "deviceToken":this.googleLoginData.deviceToken,
	      "loginType":this.googleLoginData.loginType,
	      "userImageUrl":this.googleLoginData.userImageUrl,
	      "userType":this.userValue,
	      "gender":this.radioValue,
	      "password": "123456"
	    }

	    console.log("google plus googlePlusData" +JSON.stringify(googlePlusData));
	    this.serviceProvider.socialSignIn(googlePlusData).then(
	      data => {
	        console.log("ts data" +JSON.stringify(data));
	        console.log("ts data status" +data["status"]);

	        if(data["status"] == 0) {
	        	console.log("iffff status check.....");
	        	// this.loader.hide();
		        let alert = this.alertCtrl.create({
		          title: 'error',
		          subTitle: data["message"],
		          buttons: [
					      {
					        text: 'OK',
					        role: 'ok',
					        handler: data => {
					          console.log('ok clicked' +JSON.stringify(data));
					          this.navCtrl.push("SigninPage");
					        }
					      },
				      ]
		        });
		        alert.present();
	        } else {
	        	console.log("else.....");

	        	let obj: any = data;
		        console.log("obj" +JSON.stringify(obj));
		        console.log("userId" +obj.data.ID);
		        console.log("token" +obj.data.sessionId);
		        console.log("user_type" +obj.data.user_type);
		        // console.log(this.serviceProvider.headers, obj.data.ID);
		        this.serviceProvider.headers.append("Authorization", obj.data.sessionId);
		        this.storage.set("userData", obj);
		        this.storage.set("userId", obj.data.ID);
		        this.storage.set("token", obj.data.sessionId);

		        if (obj.data.user_type) {
		            this.loader.hide();
		            this.navCtrl.setRoot("HomeappPage", { user_type: obj.data.user_type });
		        }
	        }

	        
	      // }).catch(error => {
	      //   console.log("company info error", error);
	        // this.loader.hide();
	        // let alert = this.alertCtrl.create({
	        //   title: 'error',
	        //   subTitle: error.error['error'],
	        //   buttons: ['Dismiss']
	        // });
	        // alert.present();
	      //   // this.error = error.error['error'];
	      // });
	      },
	      err => {
	        this.storage.set("userId", "");
	        this.storage.set("token", "");
	        this.storage.set("userData", "");

	        this.loader.hide();
	        // console.log("err", err)
	        this.error = err.message;
	        console.log("this.error" +JSON.stringify(this.error))
	      }
	    );
		} else if(this.logintype == "FACEBOOK"){
			console.log("facebookLoginData......" +JSON.stringify(this.facebookLoginData));
			let facebookData = {
	      "identifierId":this.facebookLoginData.identifierId,
	      "name":this.facebookLoginData.name,
	      "email":this.facebookLoginData.email,
	      "deviceType":this.facebookLoginData.deviceType,
	      "deviceToken":this.facebookLoginData.deviceToken,
	      "loginType":this.facebookLoginData.loginType,
	      "userImageUrl":this.facebookLoginData.userImageUrl,
	      "userType":this.userValue,
	      "gender":this.radioValue,
	      "password": "123456"
	    }

	    console.log("fb facebookData" +JSON.stringify(facebookData));
	    this.serviceProvider.socialSignIn(facebookData).then(
	      data => {
	        console.log("ts data" +JSON.stringify(data));
	        console.log("ts data status" +data["status"]);

	        if(data["status"] == 0) {
	        	console.log("iffff status check.....");
	        	// this.loader.hide();
		        let alert = this.alertCtrl.create({
		          title: 'error',
		          subTitle: data["message"],
		          buttons: [
					      {
					        text: 'OK',
					        role: 'ok',
					        handler: data => {
					          console.log('ok clicked' +JSON.stringify(data));
					          this.navCtrl.push("SigninPage");
					        }
					      },
				      ]
		        });
		        alert.present();
	        } else {
	        	console.log("else.....");

	        	let obj: any = data;
		        console.log("obj" +JSON.stringify(obj));
		        console.log("userId" +obj.data.ID);
		        console.log("token" +obj.data.sessionId);
		        console.log("user_type" +obj.data.user_type);
		        // console.log(this.serviceProvider.headers, obj.data.ID);
		        this.serviceProvider.headers.append("Authorization", obj.data.sessionId);
		        this.storage.set("userData", obj);
		        this.storage.set("userId", obj.data.ID);
		        this.storage.set("token", obj.data.sessionId);

		        if (obj.data.user_type) {
		            this.loader.hide();
		            this.navCtrl.setRoot("HomeappPage", { user_type: obj.data.user_type });
		        }
	        }

	        
	      // }).catch(error => {
	      //   console.log("company info error", error);
	        // this.loader.hide();
	        // let alert = this.alertCtrl.create({
	        //   title: 'error',
	        //   subTitle: error.error['error'],
	        //   buttons: ['Dismiss']
	        // });
	        // alert.present();
	      //   // this.error = error.error['error'];
	      // });
	      },
	      err => {
	        this.storage.set("userId", "");
	        this.storage.set("token", "");
	        this.storage.set("userData", "");

	        this.loader.hide();
	        // console.log("err", err)
	        this.error = err.message;
	        console.log("this.error" +JSON.stringify(this.error))
	      }
	    );
		} else {
			
  	}
	}

}
