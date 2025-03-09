import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimitDecimalPipe } from '../pipe/limit-decimal.pipe';

@Component({
  selector: 'app-quiz',
  imports: [CommonModule,LimitDecimalPipe],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
}
