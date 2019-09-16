import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsAddComponent } from './contacts-add.component';
import {ContactsModule} from '../contacts.module';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ToastrModule} from 'ngx-toastr';

describe('ContactsAddComponent', () => {
  let component: ContactsAddComponent;
  let fixture: ComponentFixture<ContactsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ],
      imports: [ContactsModule, ToastrModule.forRoot()],
      providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
