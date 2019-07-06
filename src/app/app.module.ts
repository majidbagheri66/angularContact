import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent, DialogContentExampleDialog } from './contacts/contacts.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { AddContactComponent } from './add-contact/add-contact.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import { HttpClientModule } from '@angular/common/http';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { ContactService } from './contact.service';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { DeleteContactComponent} from './delete-contact/delete-contact.component';
import {MatExpansionModule} from '@angular/material/expansion';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    ContactDetailComponent,
    AddContactComponent,
    UpdateContactComponent,
    DeleteContactComponent,
    DialogContentExampleDialog
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatListModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatSnackBarModule,
    MatStepperModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatExpansionModule
  ],
  providers: [ContactService, {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { showError: true }
  }],
  bootstrap: [AppComponent],
  entryComponents: [ContactsComponent, DialogContentExampleDialog]
})
export class AppModule { }
