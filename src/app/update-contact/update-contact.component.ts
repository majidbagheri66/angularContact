import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { IContact } from '../contact.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {
  contactArray;
  selectedContact: IContact;
  myControl = new FormControl();
  filteredContact: Observable<string[]>;

  constructor(private contactservice: ContactService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    var res = [];
    this.contactservice.getcontacts().subscribe(
      Response => {
        for (var x in Response) {
          Response.hasOwnProperty(x) && res.push(Response[x])
        }

        this.contactArray = res;

        this.filteredContact = this.myControl.valueChanges
          .pipe(
            startWith(''),
            map(value => typeof value === 'string' ? value : value.name),
            map(name => name ? this._filter(name) : this.contactArray.slice())
          );
      }
    );
  }
  
  onSelect(contact: IContact): void {
    this.selectedContact = contact;
  }

  displayFn(contact?: IContact): string | undefined {
    return contact ? contact.name +" "+ contact.family : undefined;
  }

  private _filter(name: string): IContact[] {
    const filterValue = name.toLowerCase();

    return this.contactArray.filter(contact => contact.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
