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

  // import value from signal and bind it here as a initial values
  amountOfMoney :string='';
  selectedCurrency:string="USD";
  selectedCurrencyToExchange:string="PLN";
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
      const currency = signal<string>(this.selectedCurrency)
      const currencyToExchange= signal<string>(this.selectedCurrencyToExchange);

      if(currency() in rates && currencyToExchange() in rates[currency()])
      {
        return rates[currency()][currencyToExchange()]
      }
      else{
        return 0
      }
    }
    )
    

    // its not calculating automatically
    calculatedAmountOfMoney = computed(() => {
       return this.computedExchangeRate() * +this.amountOfMoney; })

}
