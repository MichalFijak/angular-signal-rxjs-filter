import { Component, signal } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { CalculatorService, ExchangeRates } from './calculator-service/calculator.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule,CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

    protected exchangeRate =signal<ExchangeRates>({
      USD: {
      PLN: 4.04,
      EUR: 0.95,
    }}as ExchangeRates)
    constructor(private calculatorService:CalculatorService){
    
    }
}

