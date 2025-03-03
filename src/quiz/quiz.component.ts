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
    let questionNumber =this.quizQuestions().filter(
                        value=>value.questionId==question.questionId)[0]
                        .answerModel.filter(a=>a.answerId==answer.answerId);
    console.log(questionNumber);

    // update boolean inside answerModel quiz = ()=>computed...
  }

}
