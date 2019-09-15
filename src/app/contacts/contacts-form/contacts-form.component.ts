import {Component, OnInit} from '@angular/core';
import * as CountryList from 'country-list';
import {Contact} from '../models/contact';
import {StorageService} from '../services/storage.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit {
  countryList: string[] = [];

  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    country: new FormControl('', Validators.required)
  });

  constructor(private storageService: StorageService) {
  }

  ngOnInit(): void {
    this.countryList = CountryList.getNames();
  }

  submit() {
    if (this.contactForm.valid) {
      let contacts: Contact[];
      contacts = this.storageService.getContacts();
      contacts.push(new Contact(
         this.contactForm.controls.firstName.value,
         this.contactForm.controls.lastName.value,
         this.contactForm.controls.email.value,
         this.contactForm.controls.country.value
      ));
      this.storageService.setContacts(contacts);
    }
  }

}
