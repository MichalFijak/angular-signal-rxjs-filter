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

    protected exchangeRate !:Signal<ExchangeRates>
    constructor(private calculatorService:CalculatorService){
    this.exchangeRate=this.calculatorService.getExchangeRate();
    

    }
    computedExchangeRate = computed(()=>
    {
     const rate= this.exchangeRate()
     
    })
}


// computedExchangeRate = computed(()=>{
//   const rates = this.exchangeRates();

//   if(this.selectedCurrency() in rates &&
//    this.selectedCurrencyToExchange() in rates[this.selectedCurrency()])
//   {
//     return rates[this.selectedCurrency()][this.selectedCurrencyToExchange()]
//   }
//   else{
//     return 1
//   }
// }
// )
//        calculatedAmountOfMoney = computed(() => {
//   return this.computedExchangeRate() * +this.amountOfMoney(); },
//   );
