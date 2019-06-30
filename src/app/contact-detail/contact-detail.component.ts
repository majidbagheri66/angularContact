import { Component, OnInit, Input } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import { IContact } from '../contact.interface';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {
  @Input() contact: IContact;
  Contact=ContactService;
  constructor(private _snackBar: MatSnackBar) { }
  

  ngOnInit() {
  }
   addContact(){
    
  this._snackBar.open("Contact Added!","OK",{duration:3000});
   }
   deleteContact(){
     this._snackBar.open("Contact Deleted!","OK",{duration:3000});
   }

}
