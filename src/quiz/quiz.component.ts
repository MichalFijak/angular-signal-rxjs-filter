import { Component, signal } from '@angular/core';
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

  protected readonly quizQuestions= signal<QuizModel[]>([{question:'',answerModel:[],questionId:0}]);
  protected score!:number;
  protected enableScore=false;
  constructor(private quizService: QuizService)
  {
    this.quizQuestions.set(this.quizService.getQuestions().quiz);
  }

  protected choosenAnswer(question:QuizModel,answer:AnswerModel)
  {    
    let quizModel = this.quizQuestions().map((q)=>{
      if (q.questionId === question.questionId) {
        return {
          ...q,
          answerModel: q.answerModel.map((a) =>
            a.answerId === answer.answerId ?
             { ...a, ...answer, isChecked: !a.isChecked } : { ...a, isChecked: false }
          )
        };
      };
      return q;
    })

    this.quizQuestions.update(()=>quizModel)
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

    // if user choosed wrong answer it should be marked as red, and the correct one should be green
  }

}
