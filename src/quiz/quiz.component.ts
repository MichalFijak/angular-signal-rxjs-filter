import { Component, signal } from '@angular/core';
import { QuizService } from './quiz.service';
import { CommonModule } from '@angular/common';
import { QuizModel } from './models/quiz-model';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {

  public readonly quizQuestions= signal<QuizModel[]>([{question:'',answerModel:[]}]);
  constructor(private quizService: QuizService)
  {
    this.quizQuestions.set(this.quizService.getQuestions().quiz);
  }
}
