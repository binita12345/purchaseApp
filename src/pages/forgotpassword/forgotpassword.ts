import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from '../../validators/email';
import { ServiceProvider } from '../../providers/service/service';
import { Loader } from "../../providers/loader/loader";
/**
 * Generated class for the ForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgotpassword',
  templateUrl: 'forgotpassword.html',
})
export class ForgotpasswordPage {

	public resetForm:FormGroup;
  error : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    public serviceProvider: ServiceProvider, private loader: Loader, public alertCtrl: AlertController) {

  	this.resetForm = formBuilder.group({	
	      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])]
	  })

    this.resetForm.controls.email.setValue('bini1@gmail.com');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotpasswordPage');
  }

  reset(){
    this.error = ''
    this.loader.show('Please Wait'); 
    let resetpwdData = {
      'email' : this.resetForm.value.email
    }
    // if(this.serviceProvider.getNetworkType() == 'none') {
    //   this.loader.hide();
    //   // console.log('network was disconnected :-(');
    //   let alert = this.alertCtrl.create({
    //     title: 'Oops!',
    //     subTitle: "You seem to be offline ! Please Enable network to get the password",
    //     buttons: [{
    //       text: ("Okay")
    //     }]
    //   });
    //   alert.present();
    // } else {
      this.serviceProvider.forgotPasswordData(resetpwdData).then(
        data => {
          console.log("ts forgot data" +JSON.stringify(data))
          if(data['status'] == 0){
            this.loader.hide();
            let alert = this.alertCtrl.create({
              title: 'Sorry!',
              subTitle: data["message"],
              buttons: ['Ok']
            });
            alert.present();
          } else if(data['status'] == 1) {
            this.loader.hide();
            let alert = this.alertCtrl.create({
              title: 'Congratulations!',
              subTitle: data["message"],
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    console.log('ok clicked');
                    this.navCtrl.push("SigninPage");
                  }
                }
              ]
            });
            alert.present();
          }
        },
        err => {
          console.log("this.error" +JSON.stringify(err))
      });
    }
  // }

}
