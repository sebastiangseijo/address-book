import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsEditComponent } from './contacts-edit.component';
import {ContactsModule} from '../contacts.module';
import {RouterModule} from '@angular/router';
import {ToastrModule} from 'ngx-toastr';
import {routes} from '../../app-routing.module';

describe('ContactsEditComponent', () => {

  let component: ContactsEditComponent;
  let fixture: ComponentFixture<ContactsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [ContactsModule, RouterModule.forRoot(routes), ToastrModule.forRoot()],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
