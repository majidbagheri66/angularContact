import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ContactService } from '../contact.service';
import { IContact } from '../contact.interface';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup:FormGroup;

  @ViewChild('cname',{static:false}) cname:ElementRef;
  @ViewChild('cfamily',{static:false}) cfamily:ElementRef;
  @ViewChild('cmail',{static:false}) cmail:ElementRef;
  @ViewChild('cphone',{static:false}) cphone:ElementRef;

  constructor(private _formBuilder: FormBuilder, private contactservice:ContactService,private _snackBar: MatSnackBar) {}

  ngOnInit() {
    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
  }
onSaveContact(){
let contact:IContact={cid:0,name:'',family:'',email:'',phone:0};
contact.cid=10;
contact.name=this.cname.nativeElement.value;
contact.family=this.cfamily.nativeElement.value;
contact.email=this.cmail.nativeElement.value;
contact.phone=this.cphone.nativeElement.value;
this.contactservice.addcontacts(contact).subscribe(
Response=>console.log(Response)
);
this._snackBar.open("Contact Added!","OK",{duration:3000});
}
}
