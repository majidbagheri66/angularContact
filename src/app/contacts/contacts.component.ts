import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import {CONTACTS} from '../mock-contacts'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  contacts=CONTACTS;
  selectedContact: Contact;

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(contact: Contact): void {
    this.selectedContact = contact;
  }

}
