import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contact';
import { CONTACTS } from '../mock-contacts';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: Contact;
  Contact=CONTACTS;
  constructor(private _snackBar: MatSnackBar) { }
  

  ngOnInit() {
  }
   addContact(){
    this.Contact.push({
      id:3,
      name: 'Daniyal',
      family:'Abhari',
      email:'hfdhf@hfcgh.ir',
      phone:9352350645
  });
  this._snackBar.open("Contact Added!","OK",{duration:3000});
   }
   deleteContact(){
     this.Contact.splice(5,1);
     this._snackBar.open("Contact Deleted!","OK",{duration:3000});
   }

}
