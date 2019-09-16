import * as uuid from 'uuid';

export class Contact {
   readonly id: string;
   firstName: string;
   lastName: string;
   email: string;
   country: string;

  constructor(firstName: string, lastName: string, email: string, country: string) {
    this.id = uuid.v4();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.country = country;
  }

}
