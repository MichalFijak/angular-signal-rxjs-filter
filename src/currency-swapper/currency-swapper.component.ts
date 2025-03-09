import { Component, computed, inject, signal } from '@angular/core';
import { SwapperService } from './swapper.service';
import { FormsModule } from '@angular/forms';
import { CurrencyPipe } from '@angular/common';
import { SwapperCurrency } from './swapper-currency/SwapperCurrency';


@Component({
  selector: 'app-currency-swapper',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './currency-swapper.component.html',
  styleUrl: './currency-swapper.component.css'
})
export class CurrencySwapperComponent {

  currencyPrice :CurrencyExchange=
  {
    "EUR":1.14,
    "USD":1,
    "GBP":1.31
  }
  amount = signal<number>(20);
  chosenOne=signal<SwapperCurrency>("USD");

  service = inject(SwapperService);

  currency = this.service.getCurrency();

  calculatedAmount = computed(()=>this.amount()*this.currencyPrice[this.currency()])


  changeCurrency()
  {
    this.service.setCurrency(this.chosenOne());
  }

}

export type CurrencyExchange = Record<SwapperCurrency,number>;