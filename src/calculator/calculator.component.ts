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

    protected selectedCurrency = signal<string>('USD');
    protected choosenCurrencyToExchange = signal<string>('EUR');
    protected amountOfMoney = signal<string>('0');
    protected exchangeRate !:Signal<ExchangeRates>
    constructor(private calculatorService:CalculatorService){
    this.exchangeRate=this.calculatorService.getExchangeRate();
    }
    computedExchangeRate = computed(()=>
    {
     const rates= this.exchangeRate()
     if(this.selectedCurrency() in rates &&
        this.choosenCurrencyToExchange() in rates[this.selectedCurrency()])
        {
          return rates[this.selectedCurrency()][this.choosenCurrencyToExchange()]
        }
        else
        {
          return 1;
        }
    })
    exchangedMoney=computed(()=>this.computedExchangeRate()* +this.amountOfMoney());
}

