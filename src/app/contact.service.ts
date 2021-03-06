import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContact } from './contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  url="http://localhost:3000/contacts";
  constructor(private http:HttpClient) { }
  
  getcontacts(){
    return this.http.get(this.url);
  }

  addcontacts(contact:IContact){
    return this.http.post(this.url,contact);
  }
  updatecontact(contact:IContact,id:number){
    return this.http.patch(this.url+"/"+id,contact)
  }
  deletecontact(id:number){
    return this.http.delete(this.url+"/"+id);
  }
}
