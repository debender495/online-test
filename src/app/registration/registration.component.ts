import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { Router } from '@angular/router';
import { Person } from '../model/person.model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    person: Person = new Person();
    
    constructor(private router: Router, 
                private registrationService: RegistrationService) {
    }

    onSubmit(form: NgForm) {
    this.registrationService.setPerson(this.person);
    this.router.navigate(['/onlineTest']);
  }

}
