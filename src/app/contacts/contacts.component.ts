import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { IContact } from '../contact.interface';
import { MatSnackBar, MatDialog } from '@angular/material';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  selectedContact: IContact;
  contactArray;
  c_id:number;

  constructor(private router: Router, private contactservice: ContactService, private _snackBar: MatSnackBar, public dialog: MatDialog) { }

  ngOnInit() {
    this.contactservice.getcontacts().subscribe(
Response=>this.contactArray=Response
    );
  }
  
  onSelect(contact: IContact): void {
    this.selectedContact = contact;
  }


  deletecontact() {
    this.contactservice.deletecontact(this.c_id).subscribe(
      Response => console.log(Response)
    );
    this._snackBar.open("Contact Deleted!", "OK", { duration: 3000 });

    this.router.navigateByUrl('', { skipLocationChange: true }).then(() =>
      this.router.navigate(["list"]));
  }
  openDialog(id:number) {
    this.c_id=id;
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