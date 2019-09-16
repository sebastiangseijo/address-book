import {Component, Input, OnInit} from '@angular/core';
import * as CountryList from 'country-list';
import {Contact} from '../models/contact';
import {StorageService} from '../services/storage.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-contacts-form',
  templateUrl: './contacts-form.component.html',
  styleUrls: ['./contacts-form.component.scss']
})
export class ContactsFormComponent implements OnInit {
  // if editing, contact is passed as a input parameter to avoid code duplication
  @Input()
  contact: Contact;
  countryList: string[] = [];
  contactForm: FormGroup;

  constructor(private storageService: StorageService, private location: Location, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.countryList = CountryList.getNames();
    this.contactForm = new FormGroup({
      firstName: new FormControl(this.contact ? this.contact.firstName : '', Validators.required),
      lastName: new FormControl(this.contact ? this.contact.lastName : '', Validators.required),
      email: new FormControl(this.contact ? this.contact.email : '', [Validators.required, Validators.email]),
      country: new FormControl(this.contact ? this.contact.country : '', Validators.required)
    });
  }

  submit() {
    if (!this.contactForm.valid) {
      return;
    }
    if (!this.contact) {
      this.addNewContact();
    }
    else {
      this.editContact();
    }
    this.showSuccess();
    this.location.back();
  }

  addNewContact(): void {
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

  editContact(): void {
    let contacts: Contact[];
    contacts = this.storageService.getContacts();
    contacts.forEach((contact: Contact) => {
      if (contact.id === this.contact.id) {
        contact.firstName = this.contactForm.controls.firstName.value;
        contact.lastName = this.contactForm.controls.lastName.value;
        contact.email = this.contactForm.controls.email.value;
        contact.country = this.contactForm.controls.country.value;
      }
    });
    this.storageService.setContacts(contacts);
  }

  removeContact(): void {
    let contacts: Contact[];
    contacts = this.storageService.getContacts();
    contacts  = contacts.filter(contact => contact.id !== this.contact.id);
    this.storageService.setContacts(contacts);
    this.showSuccess();
    this.location.back();
  }

  getComposedName(): string {
    return this.contact ? this.contact.firstName + ' ' + this.contact.lastName : '';
  }

  showSuccess() {
    this.toastr.success('Operation done correctly.', 'Success!', {
      positionClass: 'toast-top-center'
    });
  }

}
