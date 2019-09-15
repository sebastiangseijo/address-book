import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsViewComponent} from './contacts/contacts-view/contacts-view.component';


const routes: Routes = [
  { path: '',
    component: ContactsViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
