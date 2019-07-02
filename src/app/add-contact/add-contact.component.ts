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
  regexpEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  @ViewChild('cname',{static:false}) cname:ElementRef;
  @ViewChild('cfamily',{static:false}) cfamily:ElementRef;
  @ViewChild('cmail',{static:false}) cmail:ElementRef;
  @ViewChild('cphone',{static:false}) cphone:ElementRef;

  constructor(private _formBuilder: FormBuilder, private contactservice:ContactService,private _snackBar: MatSnackBar) {}

  ngOnInit() {
    
    this.firstFormGroup = this._formBuilder.group({
      nameCtrl: ['', Validators.compose([
        Validators.required, 
        Validators.maxLength(20),
        Validators.minLength(3)
      ])],
      familyCtrl: ['', Validators.compose([
        Validators.required, 
        Validators.maxLength(30),
        Validators.minLength(5)
      ])]
    });
    this.secondFormGroup = this._formBuilder.group({
      emailCtrl: ['', Validators.compose([
        Validators.required, 
        Validators.pattern(this.regexpEmail)
      ])]
    });
    this.thirdFormGroup = this._formBuilder.group({
      phoneCtrl: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10000000000)
      ])]
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
