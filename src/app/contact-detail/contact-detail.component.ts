import { Component, OnInit, Input } from '@angular/core';
import { IContact } from '../contact.interface';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: IContact;
  constructor() { }
  ngOnInit() {
  }

}
