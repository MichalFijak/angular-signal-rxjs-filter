import { Component, signal } from '@angular/core';
import { QuizService } from './quiz.service';
import { CommonModule } from '@angular/common';
import { QuizModel } from './models/quiz-model';
import { LimitDecimalPipe } from '../pipe/limit-decimal.pipe';
import { AnswerModel } from './models/answer-model';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule,LimitDecimalPipe],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  protected quizQuestions = signal<QuizModel[]>([{question:'',answerModel:[],questionId:0}])
  constructor(private quizService: QuizService)
  {
    this.quizQuestions.set(this.quizService.getQuestions().quiz);
  }

  getAnswer(question:QuizModel,answer:AnswerModel)
  {
    console.log(question,answer);
    let answerModel = this.quizQuestions().map((q)=>
    {
      if(q.questionId===question.questionId)
      {
        q.answerModel.map((a)=>
        {
          return {...q, ...answer,isChecked:!a.isChecked}
        })
        console.log(q)
      }
      return q;
    })

    this.quizQuestions.update(()=>answerModel)
  }

}
