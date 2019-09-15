import { Component, OnInit } from '@angular/core';
import {Contact} from '../models/contact';
import {StorageService} from '../services/storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private storageService: StorageService, private router: Router) {
  }

  ngOnInit() {
    this.contacts = this.storageService.getContacts();
  }

  editContact(contact: Contact) {
    this.router.navigate(['edit-contact', contact.id]);
  }
}
