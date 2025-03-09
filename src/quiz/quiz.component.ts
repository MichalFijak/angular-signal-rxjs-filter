import { Component, computed, inject, signal} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LimitDecimalPipe } from '../pipe/limit-decimal.pipe';
import { QuizService } from './quiz.service';
import { QuizModel } from './models/quiz-model';
import { AnswerModel } from './models/answer-model';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule,LimitDecimalPipe],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  service = inject(QuizService);
  quizModel = this.service.getQuestions()
  score = signal<number>(0);
  isSubmitted = false;
  questionNumbers = 1;

  totalScore=computed(()=>(this.score()/this.questionNumbers)*100)


  chooseAnswer(model:QuizModel,answer:AnswerModel)
  {
    let changedModel = this.quizModel().map((q)=>{
      if(model.questionId==q.questionId)
      {
      return {
        ...q,
        answerModel:q.answerModel.map((a)=>
        {
          if(a.answerId===answer.answerId)
          {
          return {
            ...a, isChecked:!a.isChecked
          }
          }
          return {
            ...a,isChecked:false
          }
        })
      }
    }
    return q;
    })
    this.service.updateQuiz(changedModel);
  }

  submitAnswers()
  {
  this.isSubmitted = true;
  this.questionNumbers=this.quizModel().length
  this.quizModel().map((q)=>
  {
    q.answerModel.map((a)=>{
      if(a.isChecked && a.isCorrect)
      {
        this.score.update((v)=>v+1)
      }
    }
    )
  })
  }

  resetAnswers()
  {
    this.score.set(0);
    this.isSubmitted=false;
    let changedModel = this.quizModel().map((q)=>
    {
      return {
        ...q,
        answerModel:q.answerModel.map((a)=>
        {
          return {
            ...a,isChecked:false
          }
        })
      }
    })
    this.service.updateQuiz(changedModel);
  }

}

