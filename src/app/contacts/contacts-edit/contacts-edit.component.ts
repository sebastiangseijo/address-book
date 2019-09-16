import {Component, OnInit} from '@angular/core';
import {Contact} from '../models/contact';
import {ActivatedRoute} from '@angular/router';
import {StorageService} from '../services/storage.service';

@Component({
  selector: 'app-contacts-edit',
  templateUrl: './contacts-edit.component.html',
  styleUrls: ['./contacts-edit.component.scss']
})
export class ContactsEditComponent implements OnInit {
  selectedContact: Contact[];

  constructor(private route: ActivatedRoute, private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.initContactData();
  }

  initContactData(): void {
    let contacts: Contact[];
    let contactID: string;
    // Get contact id parameter
    contactID = this.route.snapshot.paramMap.get('id');
    contacts = this.storageService.getContacts();
    this.selectedContact = contacts.filter(contact => contact.id === contactID);
  }
}
