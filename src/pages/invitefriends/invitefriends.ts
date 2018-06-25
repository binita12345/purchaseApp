import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from 'lodash';
import { Loader } from "../../providers/loader/loader";
// import { PipesModule } from '../../pipes/pipes.module';
// import { Pipe, PipeTransform } from '@angular/core';
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
  // contactslists : any = [];
  private searchItems: any = [];
  items : any = [];
  filteredArray: any;

  selected : boolean = false;
  contactArray : any = [];

  selectedAll: any;
  selectedArray :any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private contacts: Contacts, private loader: Loader,
    private sanitizer: DomSanitizer) {

    this.loader.show("Retrieving contacts...");
    // this.fetchDeviceContact();

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad InvitefriendsPage');
    this.fetchDeviceContact();
  }
  fetchDeviceContact(){

    var options = {
        filter : "",
        multiple:true,
        hasPhoneNumber:true  
    };

    this.contacts.find(["*"],options).then((res) => {
      // console.log("res >>>" +JSON.stringify(res));
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
              // console.log("contactlist >>>",this.contactlist);
              this.filtered =  _.uniqWith(this.contactlist, _.isEqual);
              // console.log("this.filtered" ,this.filtered);
              this.filteredArray = this.filtered;
            }
          }
        }
      }

    }).catch((err) => {
        console.log('err',err);
    });

  }

  getItems(ev: any) {
    // Reset items back to all of the items
    let val = ev.target.value;

    if (val && val.trim() != '') {
      // console.log("filtered" ,this.filtered);
      this.filteredArray = this.filtered.filter((item) => {
        // console.log("get items item...", item);
          return ((item.displayName.toLowerCase().indexOf(val.toLowerCase()) > -1) || (item.phoneNumbers.toLowerCase().indexOf(val.toLowerCase()) > -1));
      });

    } else if(val == ''){
      this.filteredArray = this.filtered;
    }
  }

  // checkList(list, i){
  //   console.log("list" +JSON.stringify(list));
  //   console.log("i" +i);
  //   // this.selected = true;
  //   if(this.selected == false) {
  //     console.log("list" +JSON.stringify(list));
  //     console.log("i" +i);
  //     this.check = true;
  //   }
  //   this.contactArray.push(list);
  //   console.log("this.contactArray" +JSON.stringify(this.contactArray));

  //   // for(let i=0; i < this.contactArray.length; i++) {
  //     console.log("this.contactArray[i]" +JSON.stringify(this.contactArray[i]));
  //   //   this.contactArray[i].selected = true;
  //   //   console.log("this.contactArray[i].selected" +this.contactArray[i].selected);
  //   //   if(this.contactArray[i].selected == true) {
  //   //     this.check = true;
  //   //   } else {
  //   //     this.check = false;
  //   //   }
  //   // }
  //   // for(let contacts of this.contactArray) {
  //   //   console.log("contacts" +JSON.stringify(contacts));
  //   //   // contacts[i].selected = true;
  //   //   // console.log("contacts[i].selected" +contacts[i].selected);
  //   //   // if(contacts[i].selected == true) {
  //   //   //   this.check = true;
  //   //   // } else {
  //   //   //   this.check = false;
  //   //   // }
  //   // }
  // }
  checkIfAllSelected(data) {
    console.log("select check box for product" +JSON.stringify(data));
    // this.selectedAll = this.lists.every(function(item:any) {
    //   return item.selected == true;
    // })
    console.log("selected data" +JSON.stringify(data));
    if (data.selected == true) {
      this.selectedArray.push(data);
      // console.log("this.selectedArray" +JSON.stringify(this.selectedArray));
    } else {
      let newArray = this.selectedArray.filter(function(el) {
        // console.log("el..............." +JSON.stringify(el));
        return el.productid !== data.productid;
      });
      this.selectedArray = newArray;
    }
    console.log("product Array........." +JSON.stringify(this.selectedArray));
    // this.storage.set("selectedArray", this.selectedArray);
    // this.selectedAll = this.lists.every(function(item:any) {
    //     return item.selected == true;
    //   })
  }

  submitFriends() {
    console.log("submitFriends");
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
