import { Component, OnInit } from '@angular/core';
import {Contact} from '../models/contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[] = [];

  ngOnInit() {
    this.contacts.push(new Contact('Sebastian', 'Seijo', 'sebastiangseijo@gmail.com', 'ar'));
    this.contacts.push(new Contact('Micaela', 'Barrio', 'micabarrio@gmail.com', 'ar'));
  }

}
