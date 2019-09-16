import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsViewComponent } from './contacts-view.component';
import {ContactsModule} from '../contacts.module';
import {Router} from '@angular/router';

describe('ContactsViewComponent', () => {
  let component: ContactsViewComponent;
  let fixture: ComponentFixture<ContactsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [ContactsModule],
      providers: [ { provide: Router, useClass: class { navigate = jasmine.createSpy('navigate'); } }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
