import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
/**
 * Generated class for the InvitefriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-invitefriends',
  templateUrl: 'invitefriends.html',
  providers: [Contacts]
})
export class InvitefriendsPage {
  lists : any = [];
  check : boolean = false;
  private contactlist: any[]; 

  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts) {

    this.fetchDeviceContact();

    // this.lists = [{'name':"UIDAI", 'num': "+91 98297 99298"},
    // {'name':"Distress Number", 'num': "112"},
    // {'name':"Jeks parser", 'num': "+91 98297 99298"},
    // {'name':"Jeks parser", 'num': "+91 98297 99298"},
    // {'name':"Catch a Song", 'num': "+9157373"}]

    // let contact: Contact = this.contacts.create();

    // contact.name = new ContactName(null, 'Smith', 'John');
    // contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    // contact.save().then(
    //   () => console.log('Contact saved!', contact),
    //   (error: any) => console.error('Error saving contact.', error)
    // );
  }

  fetchDeviceContact(){

    var options = {
        filter : "",
        multiple:true,
        hasPhoneNumber:true  
    };

    this.contacts.find(["*"],options).then((res) => {
      console.log("res >>>" +JSON.stringify(res));
      for (var i = 0; i < res.length; i++) {
          var contact = res[i];
          var no =res[i].name.formatted;
          var phonenumber=res[i].phoneNumbers;
          if(phonenumber != null) {
              for(var n=0;n<phonenumber.length;n++) {
                  var type=phonenumber[n].type;
                  if(type=='mobile' || 'Mobile') {
                      var phone=phonenumber[n].value;
                      var mobile;
                      if(phone.slice(0,1)=='+' || phone.slice(0,1)=='0'){
                          mobile=phone.replace(/[^a-zA-Z0-9+]/g, "");
                      }
                      else {
                          var mobile_no=phone.replace(/[^a-zA-Z0-9]/g, "");
                          mobile=mobile_no;
                      }

                      var contactData={
                          "displayName":no,
                          "phoneNumbers":mobile,
                      }
                      this.contactlist.push(contactData);
                  }
              }
          }
      }

      console.log("contactlist >>>",this.contactlist);

    }).catch((err) => {
        console.log('err',err);
    });

  }
  
  checkList(list, i){
    console.log("list" +JSON.stringify(list));
    console.log("i" +i);
    if(list){
      this.check = true; 
    } else {
      this.check = false; 
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitefriendsPage');
  }
  gotoHome(){
  	this.navCtrl.push("HomeappPage");
  }
  gotoCart(){
  	this.navCtrl.push("CartlistPage");
  }
  gotoRequest(){
  	this.navCtrl.push("RequestlistPage");
  }
  gotoProfile(){
  	this.navCtrl.push("ProfilePage");
  }
  gotoNotification(){
  	this.navCtrl.push("NotificationPage");
  }
  gotoInquiryProduct(){
  	this.navCtrl.push("InquiryproductdetailPage");
  }
  gotoInviteFriend(){
  	this.navCtrl.push("InvitefriendsPage");
  }
  gotoChangePassword(){
  	this.navCtrl.push("ChangepasswordPage");
  }

}
