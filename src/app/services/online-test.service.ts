import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Question } from '../model/question.model';
import { Observable } from 'rxjs'
@Injectable()
export class OnlineTestService {

  qURL = 'assets/questions.json';
  aURL = 'assets/answers.json';

  constructor(private httpClient: HttpClient) {
  }

  getQuestions(): Observable<any> {
    return this.httpClient.get<any>(this.qURL);
  }
  
  getAnswers(): Observable<any> {
    return this.httpClient.get<any>(this.aURL);
  }
  
 selectionAnswer: any;
 
 getSelectedAnswer(): any { 
    return this.selectionAnswer; 
  }
  
  setSelectedAnswer(selectionAnswer: any) { 
    this.selectionAnswer = selectionAnswer; 
  }
  
  questionList: Question[] = [];
 
 getQuestionList(): Question[] { 
    return this.questionList; 
  }
  
  setQuestionList(questionList: Question[] ) { 
    this.questionList = questionList; 
  }
}
