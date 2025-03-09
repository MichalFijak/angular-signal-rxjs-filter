import { Component, inject, signal } from '@angular/core';
import { QuizService } from './quiz.service';
import { CommonModule } from '@angular/common';
import { QuizModel } from './models/quiz-model';
import { AnswerModel } from './models/answer-model';
import { LimitDecimalPipe } from '../pipe/limit-decimal.pipe';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule,LimitDecimalPipe],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  protected score=0;
  protected enableScore=false;
  quizSerivce = inject(QuizService);
  quizQuestions = this.quizSerivce.getQuestions();


  protected choosenAnswer(question:QuizModel,answer:AnswerModel)
  {    
    let quizModel = this.quizQuestions().map((q)=>{
      if (q.questionId === question.questionId) {
        return {
          ...q,
          answerModel: q.answerModel.map((a) =>
            a.answerId === answer.answerId ?
             { ...a, ...answer, isChecked: !a.isChecked } :
              { ...a, isChecked: false }
          )
        };
      };
      return q;
    })

    this.quizSerivce.updateQuiz(quizModel)

  }

  protected submitAnswers()
  {
    let countCorrectAnswers = 0;
    let answersCount=0;
    this.quizQuestions().forEach((q)=>{
      q.answerModel.forEach((a)=>{
        if(a.isChecked=== true &&a.isCorrect===true)
        {
          countCorrectAnswers++
        }
        if(a.isCorrect)
        {
          answersCount+=1;
        }

      })
    })    
    this.score = (countCorrectAnswers/answersCount)*100;
    this.enableScore=true;
  }
  protected resetQuiz()
  {
    this.score=0
    this.enableScore=false;
    this.resetChecks();
  }
  protected resetChecks()
  {
    let quizModel = this.quizQuestions().map((q)=>
    {
      return {
        ...q,
        answerModel:  q.answerModel.map((a)=>
        {
          return {
            ...a, isChecked:false
          }
        })

      }

    })
    this.quizSerivce.updateQuiz(quizModel)

  }
}
