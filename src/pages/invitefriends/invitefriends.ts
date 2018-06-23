import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash';
import { Loader } from "../../providers/loader/loader";
// import { SearchPipe } from '../../pipes/search/search';
// import { SortPipe } from '../../pipes/sort/sort';
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
  private contactlist: any = []; 
  filtered : any;

  names = '';
  contactslists : any = [];
  private searchItems: any;
  // descending: boolean = false;
  // order: number;
  // column: string = 'name';

  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts, private loader: Loader,
    private sanitizer: DomSanitizer) {

    this.loader.show("Please Wait");
    this.fetchDeviceContact();
    this.initializeItems();
    // this.listOfContact()
    // this.descending = true;
    // this.order = this.descending ? 1 : -1;
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
        // console.log("res[i]" ,res[i]);
        var contact = res[i];
        // console.log("res[i].name.formatted" ,res[i].name.formatted);
        var no =res[i].name.formatted;
        // console.log("res[i].phoneNumbers" ,res[i].phoneNumbers);
        // var imageContact;
        // if(res[i].photos != null) {
        //   console.log("res[i].photos", res[i].photos);
        //   imageContact = this.sanitizer.bypassSecurityTrustUrl(res[i].photos[0].value);
        //   imageContact = imageContact.changingThisBreaksApplicationSecurity
        //   console.log("imageContact", imageContact);
        // } else {
        //   imageContact = "";
        // } 
        this.loader.hide();
        var phonenumber=res[i].phoneNumbers;
        if(phonenumber != null) {
          
          // console.log("phonenumber" ,phonenumber);
          for(var n=0;n<phonenumber.length;n++) {
            var type=phonenumber[n].type;
            
            if(type=='mobile' || 'Mobile') {
              // console.log("phonenumber" ,phonenumber);
              // console.log("phonenumber[n].value" ,phonenumber[n].value);
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
                // "displayImage":imageContact
              }
              // console.log("contactData" ,contactData);

              this.contactlist.push(contactData);
              this.filtered =  _.uniqWith(this.contactlist, _.isEqual);

            }
          }
        }
      }
      console.log("this.filtered" ,this.filtered);
      // console.log("contactlist >>>",this.contactlist);

    }).catch((err) => {
        console.log('err',err);
    });

  }

  // listOfContact() {
  //   this.contactslists = this.filtered;
  //   console.log("this.contactslists...", this.contactslists);
  // }

  // setFilteredNames(ev: any) {

  //   // this.fetchDeviceContact()
  //   // this.listOfContact();
  //   let val = ev.target.value;
  //   console.log("val >>>" ,val);

  //   if (val && val.trim() != '') {
  //     this.filtered = this.filtered.filter((item) => {
  //       console.log("item >>>" ,item);
  //       return (item.displayName.toLowerCase().indexOf(val.toLowerCase())>-1);

  //     })
  //     // console.log("this.filtered value" ,this.filtered);
      
  //   }

  // }

  initializeItems() {
    this.searchItems = this.filtered;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.searchItems = this.searchItems.map((item)=>{
        console.log("item >>>" ,item);
        if(item  && item.length > 0){
          item = item.filter(brand=>{

            console.log("brand >>>" ,brand);
            // if(!brand.displayName) return false;
            // return brand.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1;
          });
        }    
        return item;   
      })
    }
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
