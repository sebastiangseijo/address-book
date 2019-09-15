import { Injectable } from '@angular/core';
import {Contact} from '../models/contact';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  setContacts(contacts: Contact[]) {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  getContacts() {
    let contacts: Contact[] = [];
    contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    return contacts;
  }

  clear() {
    localStorage.setItem('contacts', JSON.stringify([]));
  }
}
