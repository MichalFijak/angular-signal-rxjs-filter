import { Component } from '@angular/core';
import {  FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})
export class CalculatorComponent {

  amountOfMoney :string='';
  calculatedAmountOfMoney:number=0;
  selectedCurrency:string="USD";
  selectedCurrencyToExchange:string="PLN";

  exchangeRate=1.5;

  calculateMoney()
  {
    this.calculatedAmountOfMoney=this.exchangeRate*(+this.amountOfMoney)
    console.log('selectedCurrency',this.selectedCurrency);
    console.log('selectedCurrencyToExchange',this.selectedCurrencyToExchange);
  
  }
}
