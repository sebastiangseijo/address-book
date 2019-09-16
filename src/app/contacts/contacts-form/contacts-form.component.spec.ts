import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactsFormComponent } from './contacts-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgSelectModule} from '@ng-select/ng-select';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import {ToastrModule} from 'ngx-toastr';

describe('ContactsFormComponent', () => {
  let component: ContactsFormComponent;
  let fixture: ComponentFixture<ContactsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsFormComponent ],
      imports: [ReactiveFormsModule, NgSelectModule, ToastrModule.forRoot()],
      providers: [Location, { provide: LocationStrategy, useClass: PathLocationStrategy }]
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
});
