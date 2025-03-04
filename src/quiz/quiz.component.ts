import { Component, signal } from '@angular/core';
import { QuizService } from './quiz.service';
import { CommonModule } from '@angular/common';
import { QuizModel } from './models/quiz-model';
import { AnswerModel } from './models/answer-model';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  protected readonly quizQuestions= signal<QuizModel[]>([{question:'',answerModel:[],questionId:0}]);
  protected isChecked=false;
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
    this.quizQuestions().forEach((q)=>{
      q.answerModel.forEach((a)=>{
        if(a.isChecked=== true &&a.isCorrect===true)
        {
          countCorrectAnswers++
        }
      })
    })
    console.log(`The user got ${countCorrectAnswers} correct answers.`);
    // dispaly it in template, also make another ngClass to show correct answers
  }

}
