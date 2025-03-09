import { Component, computed, inject, signal, } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { CalculatorService, ExchangeRates } from './calculator-service/calculator.service';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent{
 
  service = inject(CalculatorService);

  amountOfMoney = signal<string>('0');
  
  exchangeRate=this.service.getExchangeRates();

  currentCurrency=signal<string>('USD');
  currencyToExchange=signal<string>('PLN');



  exchangedMoney = computed(()=>{
  const rates =(this.exchangeRate() as ExchangeRates)
  if( rates[this.currentCurrency()] && rates[this.currentCurrency()][this.currencyToExchange()])
  {
    return rates[this.currentCurrency()][this.currencyToExchange()]* parseFloat(this.amountOfMoney())
  }
  else
  {
    return 1;
  }
  });
}

