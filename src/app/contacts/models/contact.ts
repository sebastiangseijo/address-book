import * as uuid from 'uuid';

export class Contact {
  private readonly id: string;
  private firstName: string;
  private lastName: string;
  private email: string;
  private country: string;

  constructor(firstName: string, lastName: string, email: string, country: string) {
    this.id = uuid.v4();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.country = country;
  }

  getId(): string {
    return this.id;
  }

  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getEmail(): string {
    return this.email;
  }

  getCountry(): string {
    return this.country;
  }

  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  setEmail(email: string) {
    this.email = email;
  }

  setCountry(country: string) {
    this.country = country;
  }
}
