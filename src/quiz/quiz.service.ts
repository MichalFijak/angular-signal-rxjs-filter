import { Injectable, Signal, computed } from '@angular/core';
import { QuizTemplate } from './models/quiz-template';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private readonly quiz!: Signal<QuizTemplate>
  constructor() {
    this.quiz = computed(() => new QuizTemplate);
   }


   getQuestions()
   {
    return this.quiz();
   }

}
