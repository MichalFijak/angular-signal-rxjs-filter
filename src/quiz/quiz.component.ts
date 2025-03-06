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

  protected score=0;
  protected isSubmitted=false;
  protected quizQuestions = signal<QuizModel[]>([{question:'',answerModel:[],questionId:0}])
  constructor(private quizService: QuizService)
  {
    this.quizQuestions.set(this.quizService.getQuestions().quiz);
  }

  getAnswer(question:QuizModel,answer:AnswerModel)
  {
    let answerModel = this.quizQuestions().map((q)=>
    {
      if(q.questionId===question.questionId)
      {
        return {
        ...q,
        answerModel: q.answerModel.map((a)=>
        {
          if(answer.answerId===a.answerId){
            return {...a,isChecked:!a.isChecked}

          }
          return {...a,isChecked:false};
        })
      }
    }
      return q;
    })
    this.quizQuestions.update(()=>answerModel)
  }

  protected submitAnswers()
  {
    this.isSubmitted=true;
    let goodAnswerCount=0;
    let totalAnswers=0;
    this.quizQuestions().forEach((q)=>
    {
      q.answerModel.forEach((a)=>
      {
        if(a.isChecked===true &&a.isCorrect==true)
        {
          goodAnswerCount++;
        }
        if(a.isCorrect===true)
        {
        totalAnswers++;
        }
      })
    })
    if(totalAnswers!==0)
    {
      this.score=(goodAnswerCount/totalAnswers)*100
    }
    
  }
  protected resetQuiz()
  {
    this.isSubmitted=false;
    this.score=0;
    let answerModel=this.quizQuestions().map((q)=>{
    return{
      ...q,
     answerModel:q.answerModel.map((a)=>
     {
      return {
        ...a,isChecked:false
      }
     })
    }})
    this.quizQuestions.update(()=>answerModel);
  }
    
}

