import { TestBed } from '@angular/core/testing';

import { StorageService } from './storage.service';
import {Contact} from '../models/contact';

describe('StorageService', () => {

  const testContact: Contact = new Contact(
     'John',
     'Wick',
     'johnwick@gmail.com',
     'Spain'
  );

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StorageService = TestBed.get(StorageService);
    expect(service).toBeTruthy();
  });

  it('should retrieve and empty array', () => {
    let contacts: Contact[];
    const service: StorageService = TestBed.get(StorageService);
    service.clear();
    contacts = service.getContacts();
    // expect service contacts to be empty
    expect(contacts).toEqual([]);
  });

  it('should retrieve an array of N contacts from 1 to 10', () => {
    let contacts: Contact[];
    const service: StorageService = TestBed.get(StorageService);
    // get random number up to 10
    const randomNumber: number = Math.round(Math.random() * 10);
    service.clear();
    contacts = service.getContacts();
    expect(contacts).toEqual([]);
    // push randomNumber times to contacts array
    for (let i = 0; i < randomNumber; i++) {
      contacts.push(testContact);
    }
    // expect contacts array to be the same value as randomNumber
    expect(contacts.length).toEqual(randomNumber);
  });

  it('should clear the localStorage value of contacts', () => {
    const service: StorageService = TestBed.get(StorageService);
    // set test contact to service
    service.setContacts([testContact]);
    // expect service contacts to no be 0
    expect(service.getContacts().length).toEqual(1);
    service.clear();
    expect(service.getContacts()).toEqual([]);
    // expect service contacts to be 0
    expect(service.getContacts().length).toEqual(0);
  });
});
