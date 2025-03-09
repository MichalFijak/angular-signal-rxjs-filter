import { Injectable, Signal, computed, signal } from '@angular/core';
import { QuizTemplate } from './models/quiz-template';
import { QuizModel } from './models/quiz-model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private readonly quiz= signal<QuizModel[]>([])
  constructor() {
    this.quiz.set(new QuizTemplate().quiz);
   }


   getQuestions()
   {
    return this.quiz;
   }

   updateQuiz(quizModel:QuizModel[])
   {
    this.quiz.set(quizModel);

   }

}
