import { Injectable } from '@angular/core';
import { Person } from '../model/person.model'

@Injectable()
export class RegistrationService {
    
person:Person;
 
 getPerson(): Person { 
    return this.person; 
  } 
  setPerson(person: Person) { 
    this.person = person; 
  }

}
