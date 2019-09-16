import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsFormComponent } from './contacts-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ToastrModule} from 'ngx-toastr';
import {StorageService} from '../services/storage.service';

describe('ContactsFormComponent', () => {
  let component: ContactsFormComponent;
  let fixture: ComponentFixture<ContactsFormComponent>;
  const storageService: StorageService = new StorageService();

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsFormComponent ],
      imports: [ReactiveFormsModule, NgSelectModule, ToastrModule.forRoot()],
      providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }, StorageService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new contact', () => {
    expect(component).toBeTruthy();
    storageService.clear();
    expect(storageService.getContacts()).toEqual([]);
    component.addNewContact();
    expect(storageService.getContacts().length).toBe(1);
  });

  it('should remove all contacts', () => {
    expect(component).toBeTruthy();
    storageService.clear();
    expect(storageService.getContacts()).toEqual([]);
    component.addNewContact();
    component.addNewContact();
    expect(storageService.getContacts()).not.toEqual([]);
    storageService.clear();
    expect(storageService.getContacts()).toEqual([]);
  });
});
