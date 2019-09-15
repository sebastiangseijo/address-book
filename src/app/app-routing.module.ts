import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsViewComponent} from './contacts/contacts-view/contacts-view.component';
import {ContactsAddComponent} from './contacts/contacts-add/contacts-add.component';


const routes: Routes = [
  { path: '',
    component: ContactsViewComponent
  },
  { path: 'add-contact',
    component: ContactsAddComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
