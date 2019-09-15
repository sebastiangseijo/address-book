import { Component, OnInit } from '@angular/core';
import {Contact} from '../models/contact';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.scss']
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private storageService: StorageService) {
  }

  ngOnInit() {
    this.contacts = this.storageService.getContacts();
  }
}
