import { Component, Signal, computed, signal } from '@angular/core';
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

    protected exchangeRate !:Signal<ExchangeRates>
    constructor(private calculatorService:CalculatorService){
    this.exchangeRate=this.calculatorService.getExchangeRate();
    
    let computedExchangeRate = computed(()=>
    {
     let rate= this.exchangeRate()
     
    })
    }

}

