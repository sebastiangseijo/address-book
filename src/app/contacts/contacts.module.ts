import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ContactsListComponent} from './contacts-list/contacts-list.component';
import {ContactsViewComponent} from './contacts-view/contacts-view.component';
import {ContactsAddComponent} from './contacts-add/contacts-add.component';
import {ContactsFormComponent} from './contacts-form/contacts-form.component';
import {ContactsEditComponent} from './contacts-edit/contacts-edit.component';
import {StorageService} from './services/storage.service';
import {ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';



@NgModule({
  declarations: [
    ContactsListComponent,
    ContactsViewComponent,
    ContactsAddComponent,
    ContactsFormComponent,
    ContactsEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,

  ],
  providers: [StorageService]
})
export class ContactsModule { }
