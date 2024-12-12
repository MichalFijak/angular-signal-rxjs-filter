import { Component, OnInit, Signal, signal,computed } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { CalculatorService, ExchangeRates } from './calculator-service/calculator.service';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent implements OnInit{

  amountOfMoney =signal<string>("1");
  selectedCurrency=signal<string>("USD");
  selectedCurrencyToExchange=signal<string>("PLN");
  exchangeRate=1.5;
  
  exchangeRates !: Signal<ExchangeRates>;
  constructor(private calculatorService:CalculatorService)
  {
  }
  ngOnInit(): void {
    this.exchangeRates=this.calculatorService.getExchangeRate()
  }

    computedExchangeRate = computed(()=>{
      const rates = this.exchangeRates();

      if(this.selectedCurrency() in rates &&
       this.selectedCurrencyToExchange() in rates[this.selectedCurrency()])
      {
        return rates[this.selectedCurrency()][this.selectedCurrencyToExchange()]
      }
      else{
        return 1
      }
    }
    )
           calculatedAmountOfMoney = computed(() => {
      return this.computedExchangeRate() * +this.amountOfMoney(); },
      );

    
            
    
}

