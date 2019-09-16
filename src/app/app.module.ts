import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts/contacts-list/contacts-list.component';
import {ContactsViewComponent} from './contacts/contacts-view/contacts-view.component';
import { ContactsAddComponent } from './contacts/contacts-add/contacts-add.component';
import {ContactsFormComponent} from './contacts/contacts-form/contacts-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {StorageService} from './contacts/services/storage.service';
import { ContactsEditComponent } from './contacts/contacts-edit/contacts-edit.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactsViewComponent,
    ContactsAddComponent,
    ContactsFormComponent,
    ContactsEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgSelectModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
