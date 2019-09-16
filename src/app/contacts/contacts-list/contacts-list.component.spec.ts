import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsListComponent } from './contacts-list.component';
import {Router} from '@angular/router';

describe('ContactsListComponent', () => {
  let component: ContactsListComponent;
  let fixture: ComponentFixture<ContactsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsListComponent ],
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
