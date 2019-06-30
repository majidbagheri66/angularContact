import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { IContact } from '../contact.interface';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  selectedContact: IContact;
  contactArray;

  constructor(private contactservice:ContactService) { }

  ngOnInit() {
    this.contactservice.getcontacts().subscribe(
Response=>this.contactArray=Response
    );
  }
  
  onSelect(contact: IContact): void {
    this.selectedContact = contact;
  }

}
