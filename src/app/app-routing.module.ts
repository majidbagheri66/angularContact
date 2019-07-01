import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { AddContactComponent } from './add-contact/add-contact.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { DeleteContactComponent } from './delete-contact/delete-contact.component';

const routes: Routes = [
  {
    path: 'list',
    component: ContactsComponent
  },
  {
    path: 'details',
    component: ContactDetailComponent
  },
  {
    path: '',
    component: ContactsComponent
  },
  {
    path: 'addcontact',
    component: AddContactComponent
  },
  {
    path: 'updatecontact',
    component: UpdateContactComponent
  },
  {
    path: 'deletecontact',
    component: DeleteContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }