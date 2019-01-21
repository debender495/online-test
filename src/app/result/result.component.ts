import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OnlineTestService } from '../services/online-test.service';
import { Result } from '../model/result.model'
import { Question } from '../model/question.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
answerList: any[] = [];
resultList: Result[] = [];
resultStyle: string = 'redClass';
selectedAnswer: any = [];
questionList: Question[] = [];

constructor(private onlineTestService: OnlineTestService) {
    }
    
  ngOnInit() {
    this.selectedAnswer = this.onlineTestService.getSelectedAnswer();
    this.questionList = this.onlineTestService.getQuestionList();
    this.onlineTestService.getAnswers().subscribe((data) => {
    this.answerList = data.answers
    this.evaluateResult(this.selectedAnswer, data.answers);
  })
  }
  
  getQuestion(answer): string {
      return answer.questionKey + '. ' + answer.question;
  }
  
  evaluateResult(selectedAnswer, answerList) {
    let resultObject: Result = new Result();
    answerList.forEach(s => {
    if(selectedAnswer[s.questionKey] === s.answer.answerKey){
        resultObject = new Result();
        resultObject.question=s.question
        resultObject.questionKey=s.questionKey
        resultObject.selectedOption=s.answer.answer;
        resultObject.resultStyle="greenClass"
        resultObject.result="Correct answer";
        this.resultList.push(resultObject);
    } else {
        resultObject = new Result();
        resultObject.question=s.question
        resultObject.questionKey=s.questionKey
        resultObject.selectedOption=this.findSelectedOption(selectedAnswer[s.questionKey], s.questionKey)
        resultObject.resultStyle="redClass"
        resultObject.result="Wrong answer";
        resultObject.correctOption=s.answer.answer;
        this.resultList.push(resultObject);  
    }
    })    
  }

  findSelectedOption(selectedValue, questionKey): string {
      if(!selectedValue) {
          return "";
      }
      let selectedOption: string = this
        .questionList
        .filter(q => q.questionKey === questionKey)[0]
        .options
        .filter(option => option.value === selectedValue)[0]
        .key;
    return selectedOption;
        
}

}
