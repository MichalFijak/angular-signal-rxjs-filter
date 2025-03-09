import { Component, computed, inject, signal } from '@angular/core';
import { SwapperService } from './swapper.service';
import { FormsModule } from '@angular/forms';
import { SwapperCurrency } from './swapper-currency/SwapperCurrency';
import { CurrencyPipe } from '@angular/common';
import { Observable, of } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

export type CurrencyExchange = Record<SwapperCurrency,number>;


@Component({
  selector: 'app-currency-swapper',
  imports: [FormsModule, CurrencyPipe],
  templateUrl: './currency-swapper.component.html',
  styleUrl: './currency-swapper.component.css'
})
export class CurrencySwapperComponent {

  currencyPrice=
  {
    "EUR":1.14,
    "USD":1,
    "GBP":1.31
  }

  currencyExchange$ : Observable<CurrencyExchange> = of(this.currencyPrice);
  currencyExchange= toSignal(this.currencyExchange$, {initialValue:{USD:1,EUR:1,GBP:1}});

  service = inject(SwapperService);
  currency = this.service.getCurrency();
  switchCurrency = signal<SwapperCurrency>('EUR');
  amount = signal<number>(20);
  updateCurrency()
  {
  this.service.setCurrency(this.switchCurrency())
  }
  calculatedAmount=computed(()=>this.amount()*this.currencyExchange()[this.switchCurrency()])
}
