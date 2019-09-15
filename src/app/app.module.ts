import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import {ContactsViewComponent} from './contacts/contacts-view/contacts-view.component';
import { ContactsAddComponent } from './contacts/contacts-add/contacts-add.component';
import { ContactsFormComponent } from './contacts/contacts-form/contacts-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactsViewComponent,
    ContactsAddComponent,
    ContactsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
