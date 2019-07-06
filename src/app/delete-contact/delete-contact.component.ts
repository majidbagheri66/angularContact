import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { IContact } from '../contact.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-contact',
  templateUrl: './delete-contact.component.html',
  styleUrls: ['./delete-contact.component.scss']
})
export class DeleteContactComponent implements OnInit {
  contactArray;
  selectedContact: IContact;
  myControl = new FormControl();
  filteredContact: Observable<string[]>;
  c_name: string;
  c_family: string;
  c_email: string;
  c_id: number;
  c_phone: number;
  c_cid: number;
  isselected: boolean;

  constructor(private router: Router, private contactservice: ContactService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

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

  displayFn(contact?: IContact): string | undefined {
    return contact ? contact.name + " " + contact.family : undefined;
  }

  private _filter(name: string): IContact[] {
    const filterValue = name.toLowerCase();
    return this.contactArray.filter(contact => contact.name.toLowerCase().indexOf(filterValue) === 0);
  }
  onSelect(event: MatAutocompleteSelectedEvent) {
    this.c_name = event.option.value.name;
    this.c_family = event.option.value.family;
    this.c_email = event.option.value.email;
    this.c_phone = event.option.value.phone;
    this.isselected = event.option.selected;
    this.c_id = event.option.value.id;
    this.c_cid = event.option.value.cid;
  }

  deletecontact() {
    let id: number = this.c_id;
    this.contactservice.deletecontact(id).subscribe(
      Response => console.log(Response)
    );
    this._snackBar.open("Contact Deleted!", "OK", { duration: 3000 });

    this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["deletecontact"]));
  }
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.deletecontact()
      }
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html'
})
export class DialogContentExampleDialog { }

