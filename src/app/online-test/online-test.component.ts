import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { HttpClient } from '@angular/common/http';
import { OnlineTestService } from '../services/online-test.service';
import { Router } from '@angular/router';
import { Question } from '../model/question.model';
import { Person } from '../model/person.model'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-online-test',
  templateUrl: './online-test.component.html',
  styleUrls: ['./online-test.component.css']
})
export class OnlineTestComponent implements OnInit {
person: Person;
questionList: any;
selectedEntry;
constructor(private router: Router, 
            private registrationService: RegistrationService,
            private onlineTestService: OnlineTestService
    ) {
    }

  ngOnInit() {
  this.person = this.registrationService.getPerson();
  this.onlineTestService.getQuestions().subscribe((data) => {
      this.questionList = data.questions
      this.onlineTestService.setQuestionList(this.questionList);
  })
  }
  
  getQuestion(quiz): string {
      return quiz.questionKey + '. ' + quiz.question;
  }
  
  onSubmit(form: NgForm) {
    this.onlineTestService.setSelectedAnswer(form.value);
    this.router.navigate(['/result']);
  }
  
  onSelectionAnswer(questionKey, answer, option) {
      // console.log(answer);
      // this.selectedEntry = Object.assign({}, this.selectedEntry, answer);
    }

}